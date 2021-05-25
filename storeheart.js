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

    // Configurable
    L: 180,
    m1: 4,
    m2: 2,
    start_a1: Math.PI,
    start_a2: Math.PI + 0.00001,
    g: .2,
    simulationPaused: false,
    restartAfter: 30,
    trailType: 'rainbow', // rainbow, solid, dots
    rainbowSpeed: 4,
    trailColor: [0, 255, 0],
    trailWidth: 1,
    stickColor: [200, 200, 200],
    ballColor: [110, 110, 100],
    stickWidth: 3,
    ballSize: 25,
    drawAxes: false,
    drawPendulums: true,
    axesColor: [90, 90, 90],
    backgroundColor: [24, 24, 24],
    hueOffset: 0,
    trailDecay: 200,
}