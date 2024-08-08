const compoundNodes = [
    // Compound nodes
    {data: {id: 'math', type: 'compound'}},
    {data: {id: 'core', type: 'compound'}},
    {data: {id: 'hardware', type: 'compound'}},
    {data: {id: 'software', type: 'compound'}},
    {data: {id: 'theory', type: 'compound'}},
    {data: {id: 'applications', type: 'compound'}},
    {data: {id: 'elective', type: 'compound'}},
    {data: {id: 'stat', type: 'compound'}},
]


const courseData = [
    ...compoundNodes,

    // Nodes with parent
    {data: {id: '200', optional: 'true'}},

    {data: {id: '203', parent: 'hardware'}},
    {data: {target: '203', source: '221'}},

    {data: {id: '221', parent: 'math'}},

    {data: {id: '222', parent: 'math'}},
    {data: {target: '222', source: '221'}},

    {data: {id: '234', parent: 'math'}},
    {data: {target: '234', source: '222'}},

    {data: {id: 's240', parent: 'stat', label: '240'}},

    {data: {id: '240', parent: 'core', label: '240'}},
    {data: {target: '240', source: '221'}},

    {data: {id: '252', parent: 'core'}},

    {data: {id: '300', parent: 'core'}},
    {data: {target: '300', source: '200'}},
    {data: {target: '300', source: '200'}},

    {data: {id: '301', parent: 'stat'}},

    {data: {id: '309', parent: 'stat'}},
    {data: {target: '309', source: '234'}},

    {data: {id: '310', optional: 'true'}},
    {data: {target: '310', source: '222'}},

    {data: {id: 's310', label: '310', parent: 'stat'}},
    {data: {target: 's310', source: '301'}},
    {data: {target: 's310', source: '309'}},

    {data: {id: '324', parent: 'stat'}},
    {data: {target: '324', source: '221'}},

    {data: {id: '330', parent: 'hardware'}},
    {data: {target: '330', source: '203'}},

    {data: {id: 's340', parent: 'stat', label: '340'}},
    {data: {target: 's340', source: 's240'}},
    {data: {target: 's340', source: '221'}},

    {data: {id: 'm340', parent: 'math', label: '340'}},
    {data: {target: 'm340', source: '222'}},

    {data: {id: '352', parent: 'hardware'}},
    {data: {target: '352', source: '252'}},

    {data: {id: '354', parent: 'core'}},
    {data: {target: '354', source: '252'}},
    {data: {target: '354', source: '300'}},

    {data: {id: '400', parent: 'core'}},
    {data: {target: '400', source: '300'}},

    {data: {id: '407', parent: 'software'}},
    {data: {target: '407', source: '400'}},

    {data: {id: '412', parent: 'applications'}},
    {data: {target: '412', source: '222'}},
    {data: {target: '412', source: '240'}},
    {data: {target: '412', source: '300'}},
    {data: {target: '412', source: 'm340', type: 'recommended'}},

    {data: {id: '421', parent: 'math'}},
    {data: {target: '421', source: '234'}},

    {data: {id: '425', parent: 'applications'}},
    {data: {target: '425', source: 'm340'}},

    {data: {id: '435', parent: 'elective'}},
    {data: {target: '435', source: 'm340'}},

    {data: {id: '471', parent: 'elective'}},
    {data: {target: '471', source: 's340'}},
    {data: {target: '471', source: 's310'}},

    {data: {id: '475', parent: 'elective'}},
    {data: {target: '475', source: 'm340'}},

    {data: {id: '506', parent: 'software'}},
    {data: {target: '506', source: '400'}},
    {data: {target: '506', source: '537', type: 'recommended'}},

    {data: {id: '513', parent: 'applications'}},
    {data: {target: '513', source: '300'}},
    {data: {target: '513', source: 'm340'}},

    {data: {id: '514', parent: 'applications'}},
    {data: {target: '514', source: 'm340'}},
    {data: {target: '514', source: '300'}},
    {data: {target: '514', source: '421'}},

    {data: {id: '518', parent: 'elective'}},

    {data: {id: '520', parent: 'theory'}},
    {data: {target: '520', source: '240'}},
    {data: {target: '520', source: '400'}},

    {data: {id: '524', parent: 'applications'}},
    {data: {target: '524', source: '300'}},
    {data: {target: '524', source: 'm340'}},

    {data: {id: '525', parent: 'applications'}},
    {data: {target: '525', source: 'm340'}},

    {data: {id: '526', parent: 'elective'}},
    {data: {target: '526', source: '525'}},

    {data: {id: '532', parent: 'elective'}},
    {data: {target: '532', source: '300'}},
    {data: {target: '532', source: 'm340'}},

    {data: {id: '533', parent: 'elective'}},
    {data: {target: '533', source: '330'}},
    {data: {target: '533', source: 'm340'}},

    {data: {id: '534', parent: 'applications'}},
    {data: {target: '534', source: '300'}},
    {data: {target: '534', source: '221'}},

    {data: {id: '536', parent: 'software'}},
    {data: {target: '536', source: '354'}},
    {data: {target: '536', source: '400'}},

    {data: {id: '537', parent: 'software'}},
    {data: {target: '537', source: '354'}},
    {data: {target: '537', source: '400'}},

    {data: {id: '538', parent: 'software'}},
    {data: {target: '538', source: '354'}},
    {data: {target: '538', source: '400'}},

    {data: {id: '539', parent: 'elective'}},
    {data: {target: '539', source: '300'}},

    {data: {id: '540', parent: 'applications'}},
    {data: {target: '540', source: '300'}},
    {data: {target: '540', source: '221'}},

    {data: {id: '541', parent: 'elective'}},
    {data: {target: '541', source: 's340'}},
    {data: {target: '541', source: 'm340'}},

    {data: {id: '542', parent: 'software'}},
    {data: {target: '542', source: '400'}},

    {data: {id: '544', parent: 'software'}},
    {data: {target: '544', source: '400'}},

    {data: {id: '551', parent: 'hardware'}},
    {data: {target: '551', source: '352'}},

    {data: {id: '552', parent: 'hardware'}},
    {data: {target: '552', source: '352'}},
    {data: {target: '552', source: '354'}},
    {data: {target: '552', source: '551', type: 'recommended'}},

    {data: {id: '558', parent: 'elective'}},
    {data: {target: '558', source: '400'}},
    {data: {target: '558', source: '234'}},

    {data: {id: '559', parent: 'applications'}},
    {data: {target: '559', source: '222'}},
    {data: {target: '559', source: '234', type: 'recommended'}},
    {data: {target: '559', source: 'm340', type: 'recommended'}},
    {data: {target: '559', source: '400'}},

    {data: {id: '561', parent: 'elective'}},
    {data: {target: '561', source: '324'}},
    {data: {target: '561', source: 'm340'}},

    {data: {id: '564', parent: 'software'}},
    {data: {target: '564', source: '354'}},
    {data: {target: '564', source: '400'}},

    {data: {id: '565', parent: 'applications'}},
    {data: {target: '565', source: '400'}},

    {data: {id: '566', parent: 'applications'}},
    {data: {target: '566', source: '400'}},
    {data: {target: '566', source: 'm340'}},
    {data: {target: '566', source: '324'}},

    {data: {id: '567', parent: 'elective'}},
    {data: {target: '567', source: '310', type: 'recommended'}},
    {data: {target: '567', source: 'm340',}},
    {data: {target: '567', source: '324',}},

    {data: {id: '570', parent: 'applications'}},
    {data: {target: '570', source: '300'}},

    {data: {id: '571', parent: 'applications'}},
    {data: {target: '571', source: '400'}},

    {data: {id: '576', parent: 'elective'}},
    {data: {target: '576', source: '400'}},

    {data: {id: '577', parent: 'theory'}},
    {data: {target: '577', source: '240'}},
    {data: {target: '577', source: '400'}},

    {data: {id: '579', parent: 'elective'}},
    {data: {target: '579', source: '559', type: 'recommended'}},

    {data: {id: '635', parent: 'elective'}},
    {data: {target: '635', source: 'm340'}},
    {data: {target: '635', source: '300'}},

    {data: {id: '639', parent: 'elective'}},

    {data: {id: '640', parent: 'software'}},
    {data: {target: '640', source: '537'}},

    {data: {id: '642', parent: 'software'}},
    {data: {target: '642', source: '537'}},
    {data: {target: '642', source: '240', type: 'recommended'}},
];

document.addEventListener('DOMContentLoaded', () => {

    let cyLegend = cytoscape({
        container: document.getElementById('legend'),
        elements: [
            {data: {id: 'core', category: 'core'}},
            {data: {id: 'software', category: 'software'}},
            {data: {id: 'hardware', category: 'hardware'}},
            {data: {id: 'theory', category: 'theory'}},
            {data: {id: 'applications', category: 'applications'}},
            {data: {id: 'elective', category: 'elective'}},
            {data: {id: 'math', category: 'math'}},
            {data: {id: 'stat', category: 'stat'}},
        ],
        style: legendStyles,
        layout: {
            name: 'grid',
            rows: 1,
            padding: 0
        },
        userZoomingEnabled: false,
        userPanningEnabled: false,
        boxSelectionEnabled: false,
        autoungrabify: true,
        autounselectify: true,
    });

    cyLegend.on('mouseover', 'node', function(event) {
        const targetNode = event.target;
        targetNode.addClass('highlighted-nodes');

        cyLegend.nodes().difference(targetNode).addClass('faded');

        const nonCompoundNodes = getNonCompoundNodes();

        const highlightedNodes = nonCompoundNodes.filter(function(node) {
            return node.data('parent') === targetNode.id();
        })
        highlightedNodes.addClass('highlighted-nodes');

        nonCompoundNodes.difference(highlightedNodes).addClass('faded');
    });

    cyLegend.on('mouseout', 'node', function(event) {
        cyLegend.nodes().removeClass('highlighted-nodes');
        cyLegend.nodes().removeClass('faded');

        cy.nodes().removeClass('highlighted-nodes');
        cy.elements().removeClass('faded');
    });

    let cy = cytoscape({
        container: document.getElementById('cy'),
        elements: courseData,
        style: cytoscapeStyles,
        layout: {
            name: 'breadthfirst',
            directed: true,
            padding: 10,
            roots: '#300'
        },
        minZoom: 0.5,
        maxZoom: 2,
        motionBlur: true,
    });

    cy.layout({
        name: 'fcose',
        quality: 'proof', // 'draft', 'default' or 'proof'
        animate: true, // Whether to animate the layout
        animationDuration: 1000, // Duration of the animation in milliseconds
        animationEasing: 'ease-out', // Easing of the animation
        fit: true, // Whether to fit the viewport to the graph
        padding: 30, // Padding around the layout
        nodeDimensionsIncludeLabels: true, // Excludes the label when calculating node bounding boxes for the layout algorithm
        uniformNodeDimensions: true, // Specifies whether the node dimensions should be uniform
        packComponents: true, // Pack connected components - usually for graphs with multiple components
        nodeRepulsion: 35000, // Node repulsion (non overlapping) multiplier
        idealEdgeLength: 50, // Ideal edge (non nested) length
        edgeElasticity: 0.45, // Divisor to compute edge forces
        nestingFactor: 1, // Nesting factor (multiplier) to compute ideal edge length for nested edges
        infinite: true, // Overrides the maximum number of iterations
        gravity: 1000,
        gravityRangeCompound: 1,
        gravityCompound: 100,
        gravityRange: 1.5,
        initialEnergyOnIncremental: 1,
        randomize: false, // Whether to randomize the initial positions of nodes
        fixedNodeConstraint: [
            {
                nodeId: '300',
                position: { x: -100, y: 0 }
            },
            {
                nodeId: '400',
                position: { x: 100, y: 0 }
            }
        ],
        alignmentConstraint: {
            vertical: [
            ],
            horizontal: [
                ['221', '222'],
                ['300', '400']
            ]
        },
        relativePlacementConstraint: [
            { left: '200', right : '300', gap: 100 },
            { left: '221', right : '222', gap: 200 },
        ]
    }).run();

    cy.on('mouseover', 'node', function(event) {
        const targetNode = event.target;
        highlightPath(targetNode);
    });

    cy.on('mouseout', 'node', function(event) {
        cy.nodes().removeClass('highlighted-nodes');
        cy.elements().removeClass('faded');
        cy.edges().removeClass('highlighted-edges');
    });

    function getNonCompoundNodes() {
        return cy.nodes().filter(function(node) {
            return node.data('type') !== 'compound';
        });
    }

    function highlightPath(node) {

        if (node.data('type') === 'compound') {
            return;
        }

        const incomingNodes = node.predecessors('node').union(node);
        const incomingEdges = node.predecessors('edge');

        const outgoingNodes = node.outgoers('node').union(node);
        const outgoingEdges = node.outgoers('edge');

        const highlightedNodes = incomingNodes.union(outgoingNodes);
        const highlightedEdges = incomingEdges.union(outgoingEdges);

        highlightedNodes.addClass('highlighted-nodes');
        highlightedEdges.addClass('highlighted-edges');

        const nonCompoundNodes = getNonCompoundNodes();

        const fadeNodes = nonCompoundNodes.difference(highlightedNodes);
        const fadeEdges = cy.edges().difference(highlightedEdges);
        fadeNodes.addClass('faded');
        fadeEdges.addClass('faded');

    }
});

