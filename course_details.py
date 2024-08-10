import json
import re

import requests
from bs4 import BeautifulSoup

cs_url = 'https://guide.wisc.edu/courses/comp_sci/'
stat_url = 'https://guide.wisc.edu/courses/stat/'
math_url = 'https://guide.wisc.edu/courses/math/'


def extract_course_numbers(text):
    # Define the regex pattern to match course numbers (e.g., 102, 200, 240, etc.)
    pattern = re.compile(r'\d{2,3}$')

    # Find all matches in the provided text
    matches = pattern.search(text)

    return matches.group(0)


def get_course_details(url):
    # Fetch the HTML content from the URL
    response = requests.get(url)
    response.raise_for_status()  # Check if the request was successful
    html_content = response.text

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find all course blocks
    course_blocks = soup.find_all('div', class_='courseblock')

    course_details = {}

    # Iterate over each course block to extract course information
    for course_block in course_blocks:
        block_code = course_block.find('span', class_='courseblockcode').get_text(strip=True)
        print(f'Discovered: {block_code}');
        number = extract_course_numbers(block_code)

        # Extract course title
        title = course_block.find('p', class_='courseblocktitle').strong.get_text(strip=True)
        title = title.split('—')[-1].strip()

        # Extract course description
        description = course_block.find('p', class_='courseblockdesc').get_text(strip=True)

        # Store the extracted information in the dictionary
        course_details[number] = {
            'title': title,
            'description': description,
        }

    return course_details


# Call the function to get course requirements
if __name__ == '__main__':
    cs = get_course_details(cs_url)
    math = get_course_details(math_url)
    stat = get_course_details(stat_url)

    data = {
        'COMP SCI': cs,
        'MATH': math,
        'STAT': stat,
    }

    # Write data to JSON file called data.json in docs/cs-course-map
    with open('docs/cs-course-map/data.json', 'w') as f:
        json.dump(data, f, indent=4)
