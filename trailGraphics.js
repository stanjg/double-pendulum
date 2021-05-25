import store from "./store";
import { sketch as s } from './main';
import {toScreenPointX, toScreenPointY} from "./graphics";

export const drawSolidTrail = () => {
    let history = store.trail;
    let trailColor = store.trailColor;

    s.noFill();
    s.stroke(trailColor[0], trailColor[1], trailColor[2]);
    s.strokeWeight(store.trailWidth);
    s.beginShape();
    history.forEach((vector) => {
        s.vertex(toScreenPointX(vector.x), toScreenPointY(vector.y));
    });
    s.endShape();
}

export const drawDottedTrail = () => {
    let trailColor = store.trailColor;
    s.fill(trailColor[0], trailColor[1], trailColor[2]);

    store.trail.forEach((particle) => {
        s.circle(toScreenPointX(particle.x), toScreenPointY(particle.y), store.trailWidth*2);
    });
}

export const drawRainbowTrail = () => {
    s.colorMode(s.HSB);
    s.strokeWeight(store.trailWidth);

    for (let i = 0; i < store.trail.length - 1; i++) {
        let particle = store.trail[i];
        let nextParticle = store.trail[i+1];
        let color = store.hueOffset + 20 * particle.index % 360;

        while (color > 360) {
            color = color - 360;
        }

        s.stroke(color, 100, 100);
        s.line(toScreenPointX(particle.x), toScreenPointY(particle.y), toScreenPointX(nextParticle.x), toScreenPointY(nextParticle.y));
    }

    store.hueOffset += store.rainbowSpeed;
    s.colorMode(s.RGB);
}

export const TrailHistory = class {
    x;
    y;
    timeCreated;
    index;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.timeCreated = new Date().getTime();
        this.index = store.trail.length > 0 ? store.trail[store.trail.length-1].index + 1 : 0;
    }
}