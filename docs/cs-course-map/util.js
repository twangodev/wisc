
// Function to format the timestamp into relative time
function timeAgo(date) {
    const now = new Date();
    const secondsPast = (now.getTime() - date.getTime()) / 1000;

    let unit = 'second';
    let divisor = 1;
    if (secondsPast < 3600 && secondsPast >= 60) {
        unit = 'minute';
        divisor = 60;
    } else if (secondsPast < 86400) {
        unit = 'hour';
        divisor = 3600;
    } else if (secondsPast < 2592000) {
        unit = 'day';
        divisor = 86400;
    } else if (secondsPast < 31536000) {
        unit = 'month';
        divisor = 2592000;
    } else {
        unit = 'year';
        divisor = 31536000;
    }

    const time = Math.floor(secondsPast / divisor);

    if (time !== 1) unit += 's';
    return `${time} ${unit} ago`;

}

// Function to format the timestamp into a full date format
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Main function to convert ISO 8601 to the desired formats
function convertISO8601(isoString) {
    const date = new Date(isoString);
    const relativeTime = timeAgo(date);
    const formattedDate = formatDate(date);
    return `${relativeTime} (${formattedDate})`;
}
