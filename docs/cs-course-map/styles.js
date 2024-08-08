const colors = {
    core: '#ff7373',
    hardware: '#fff176',
    software: '#90CAF9',
    theory: '#80CBC4',
    applications: '#CE93D8',
    elective: '#EEEEEE',
    math: '#C5E1A5',
    stat: '#E6EE9C',
}

const globalStyles = [
    {
        selector: '.highlighted-nodes',
        style: {
            'border-width': 1,
            'border-color': '#000',
            'border-style': 'solid',
        }
    },
    {
        selector: '.faded',
        style: {
            'opacity': 0.25,
            'text-opacity': 0.25,
        }
    },
    {
        selector: '*',
        style: {
            'transition-property': 'opacity',
            'transition-duration': '0.2s',
        }
    },
]

const legendStyles = [
    ...globalStyles,
    {
        selector: 'node',
        style: {
            'label': data => data.data('label') || data.id(),
            'text-valign': 'top',
            'text-halign': 'center',
            'text-margin-y': -5,
            'background-color': '#757575',
            'padding': 6,
        }
    },
    {
        selector: 'node[category="core"]',
        style: {
            'background-color': colors.core
        }
    },
    {
        selector: 'node[category="hardware"]',
        style: {
            'background-color': colors.hardware
        }
    },
    {
        selector: 'node[category="software"]',
        style: {
            'background-color': colors.software
        }
    },
    {
        selector: 'node[category="theory"]',
        style: {
            'background-color': colors.theory
        }
    },
    {
        selector: 'node[category="applications"]',
        style: {
            'background-color': colors.applications
        }
    },
    {
        selector: 'node[category="elective"]',
        style: {
            'background-color': colors.elective
        }
    },
    {
        selector: 'node[category="math"]',
        style: {
            'background-color': colors.math
        }
    },
    {
        selector: 'node[category="stat"]',
        style: {
            'background-color': colors.stat
        }
    },
]


const cytoscapeStyles = [
    ...globalStyles,
    {
        selector: 'node',
        style: {
            'label': data => data.data('label') || data.id(),
            'text-valign': 'center',
            'text-halign': 'center',
            'background-color': '#757575',
            'padding': 10
        }
    },
    {
        selector: 'node[parent="core"]',
        style: {
            'background-color': colors.core
        }
    },
    {
        selector: 'node[parent="hardware"]',
        style: {
            'background-color': colors.hardware
        }
    },
    {
        selector: 'node[parent="software"]',
        style: {
            'background-color': colors.software
        }
    },
    {
        selector: 'node[parent="theory"]',
        style: {
            'background-color': colors.theory
        }
    },
    {
        selector: 'node[parent="applications"]',
        style: {
            'background-color': colors.applications
        }
    },
    {
        selector: 'node[parent="elective"]',
        style: {
            'background-color': colors.elective
        }
    },
    {
        selector: 'node[parent="math"]',
        style: {
            'background-color': colors.math
        }
    },
    {
        selector: 'node[parent="stat"]',
        style: {
            'background-color': colors.stat
        }
    },
    {
        selector: 'node[type="compound"]',
        style: {
            'text-valign': 'top',
            'border-width': 0,
            'background-opacity': 0,
            label: '',
        }
    },
    {
        selector: 'node[optional="true"]',
        style: {
            'border-width': 1,
            'border-color': '#000',
            'border-style': 'dashed',
            'opacity': 0.5,
        }
    },

    {
        selector: 'edge[type="anyOneOf"]',
        style: {
            'line-style': 'dotted'
        }
    },
    {
        selector: 'edge',
        style: {
            'width': 1,
            'line-color': '#000',
            'curve-style': 'straight',
            'target-arrow-color': '#000',
            'target-arrow-shape': 'triangle',
            'source-distance-from-node': 5,
            'target-distance-from-node': 5,
            'text-wrap': 'wrap',
            'font-size': 10,
        }
    },
    {
        selector: 'edge[type="recommended"]',
        style: {
            'line-style': 'dashed',
        }
    },

    {
        selector: '.highlighted-edges',
        style: {
            'width': 2,
        }
    },

];