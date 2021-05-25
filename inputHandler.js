import store from "./store";
import {resetRandom, setSimulationPaused, sketch} from "./main";

document.getElementById('stick-length').oninput = (e) => {
    store.L = parseInt(e.target.value);
    updateRangeValueSpan(e.target.id, parseInt(e.target.value));
}

document.getElementById('upper-mass').oninput = (e) => {
    store.m1 = parseFloat(e.target.value);
    updateRangeValueSpan(e.target.id, parseFloat(e.target.value));
}

document.getElementById('lower-mass').oninput = (e) => {
    store.m2 = parseFloat(e.target.value);
    updateRangeValueSpan(e.target.id, parseFloat(e.target.value));
}

document.getElementById('g-constant').oninput = (e) => {
    store.g = parseFloat(e.target.value);
    updateRangeValueSpan(e.target.id, parseFloat(e.target.value));
}

document.getElementById('restart-after').oninput = (e) => {
    store.restartAfter = parseInt(e.target.value);
    updateRangeValueSpan(e.target.id, parseInt(e.target.value));
}

document.getElementById('rainbow-speed').oninput = (e) => {
    store.rainbowSpeed = parseInt(e.target.value);
    updateRangeValueSpan(e.target.id, parseInt(e.target.value));
}
document.getElementById('line-width').oninput = (e) => {
    store.trailWidth = parseInt(e.target.value);
    updateRangeValueSpan(e.target.id, parseInt(e.target.value));
}

document.getElementById('line-decay').oninput = (e) => {
    store.trailDecay = parseInt(e.target.value);
    updateRangeValueSpan(e.target.id, parseInt(e.target.value));
}

document.getElementById('stick-width').oninput = (e) => {
    store.stickWidth = parseInt(e.target.value);
    updateRangeValueSpan(e.target.id, parseInt(e.target.value));
}

document.getElementById('ball-size').oninput = (e) => {
    store.ballSize = parseInt(e.target.value);
    updateRangeValueSpan(e.target.id, parseInt(e.target.value));
}

document.getElementById('line-type').onchange = (e) => {
    store.trailType = e.target.value;
}

document.getElementById('start-stop-button').onclick = (e) => {
    setSimulationPaused(! store.simulationPaused);
}

document.getElementById('line-color').oninput = (e) => {
    store.trailColor = hexToRgb(e.target.value);
}

document.getElementById('stick-color').oninput = (e) => {
    store.stickColor = hexToRgb(e.target.value);
}

document.getElementById('ball-color').oninput = (e) => {
    store.ballColor = hexToRgb(e.target.value);
}

document.getElementById('background-color').oninput = (e) => {
    store.backgroundColor = hexToRgb(e.target.value);
}

document.getElementById('reset-button').onclick = (e) => {
    resetRandom();
}

document.getElementById('show-axes').onchange = (e) => {
    store.drawAxes = e.target.checked;
}

document.getElementById('show-pendulums').onchange = (e) => {
    store.drawPendulums = e.target.checked;
}

document.getElementById('show-debug').onchange = (e) => {
    store.showDebug = e.target.checked;
}

document.getElementById('close-menu').onclick = () => {
    document.getElementById('side-bar').hidden = true;
    store.menuOpen = false;
    sketch.windowResized();
}

document.getElementById('open-menu').onclick = () => {
    document.getElementById('side-bar').hidden = false;
    store.menuOpen = true;
    sketch.windowResized();
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}

function updateRangeValueSpan(id, value) {
    document.getElementById(id + '-value').innerText = value;
}