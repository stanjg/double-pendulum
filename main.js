import './style.css';
import p5 from 'p5';
import store from './store';
import {drawAxes, drawBackground, drawDebugData, drawPendulums, drawTrail} from "./graphics";
import {doPhysics} from "./physics";
import {TrailHistory} from "./trailGraphics";
import './inputHandler';

export const resetRandom = (pause = true) => {
    store.a1_v = 0;
    store.a2_v = 0;
    store.a1_a = 0;
    store.a2_a = 0;
    store.a1 = Math.PI - sketch.random(Math.PI * -0.5, 0.5 * Math.PI);
    store.a2 = sketch.random(0, 2 * Math.PI);
    store.start_a1 = store.a1;
    store.start_a2 = store.a2;
    store.hueOffset = 0;
    store.timeSimulationRunning = 0;
    store.trail = [];
    store.x1 = store.L * Math.sin(store.a1);
    store.y1 = store.L * Math.cos(store.a1);
    store.x2 = store.x1 + store.L * Math.sin(store.a2);
    store.y2 = store.y1 + store.L * Math.cos(store.a2);
    setSimulationPaused(pause);
}

export const setSimulationPaused = (paused) => {
    store.simulationPaused = paused;
    document.getElementById('start-stop-button').value = paused ? 'Start' : 'Stop';

    if (! paused) {
        store.timeLastFrame = new Date().getTime();
    }
};

export const sketch = new p5((s) => {
    s.setup = () => {
        s.createCanvas(window.innerWidth - 300, window.innerHeight);

        // Set start angles
        store.a1 = store.start_a1;
        store.a2 = store.start_a2;
    };

    s.draw = () => {
        drawBackground();

        if (!store.simulationPaused) {
            doPhysics();

            store.trail.push(new TrailHistory(store.x2, store.y2));
            while (store.trail.length > store.trailDecay) {
                store.trail.splice(0, 1);
            }
        }

        // Update x y coordinates
        store.x1 = store.L * Math.sin(store.a1);
        store.y1 = store.L * Math.cos(store.a1);
        store.x2 = store.x1 + store.L * Math.sin(store.a2);
        store.y2 = store.y1 + store.L * Math.cos(store.a2);

        if (store.drawAxes) {
            drawAxes();
        }

        if (store.showDebug) {
            drawDebugData();
        }

        drawTrail();

        if (store.drawPendulums) {
            drawPendulums();
        }

        let time = new Date().getTime();
        if (! store.simulationPaused) {
            store.timeSimulationRunning += time - store.timeLastFrame;
        }
        store.timeLastFrame = time;

        if (store.timeSimulationRunning >= store.restartAfter * 1000) {
            resetRandom(false);
        }
    }

    s.windowResized = () => {
        sketch.resizeCanvas(window.innerWidth - (store.menuOpen ? 300 : 0), window.innerHeight);
    }
});