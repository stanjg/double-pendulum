export default {
    // Computational
    a1: 0,
    a2: 0,
    a1_v: 0,
    a2_v: 0,
    a1_a: 0,
    a2_a: 0,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    trail: [],
    startedAt: new Date().getTime(),
    menuOpen: true,
    timeSimulationRunning: 0,
    timeLastFrame: 0,

    // Configurable
    L: 180,
    m1: 4,
    m2: 2,
    start_a1: Math.PI,
    start_a2: Math.PI + 0.00001,
    g: .4,
    simulationPaused: true,
    restartAfter: 30,
    trailType: 'solid', // rainbow, solid, dots, disabled
    rainbowSpeed: 4,
    trailColor: [0, 255, 0],
    trailWidth: 2,
    stickColor: [200, 200, 200],
    ballColor: [110, 110, 100],
    stickWidth: 3,
    ballSize: 25,
    drawAxes: false,
    drawPendulums: true,
    axesColor: [90, 90, 90],
    backgroundColor: [24, 24, 24],
    hueOffset: 0,
    trailDecay: 3000,
    showDebug: false,
    showAngles: false,
};