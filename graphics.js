import store from "./store";
import { sketch as s } from "./main";
import {drawDottedTrail, drawRainbowTrail, drawSolidTrail} from "./trailGraphics";

export const drawBackground = () => {
    let bgColor = store.backgroundColor;
    s.background(bgColor[0], bgColor[1], bgColor[2]);
}

export const drawTrail = () => {
    switch (store.trailType) {
        case 'solid':
            drawSolidTrail();
            break;
        case 'dots':
            drawDottedTrail();
            break;
        case 'rainbow':
            drawRainbowTrail();
            break;
    }
}

export const drawAxes = () => {
    let axesColor = store.axesColor;
    s.stroke(axesColor[0], axesColor[1], axesColor[2]);
    s.strokeWeight(1);
    s.line(s.width/2, 0, s.width/2, s.height);
    s.line(0, s.height/2, s.width, s.height/2);

    s.noFill();
    s.circle(toScreenPointX(0), toScreenPointY(0), 2*store.L);
    s.circle(toScreenPointX(0), toScreenPointY(0), 4*store.L);
};

export const drawPendulums = () => {
    let stickColor = store.stickColor;
    s.stroke(stickColor[0], stickColor[1], stickColor[2]);
    s.strokeWeight(store.stickWidth);

    s.line(s.width / 2, s.height / 2, toScreenPointX(store.x1), toScreenPointY(store.y1));
    s.line(toScreenPointX(store.x1), toScreenPointY(store.y1), toScreenPointX(store.x2), toScreenPointY(store.y2));

    let ballColor = store.ballColor;
    s.fill(ballColor[0], ballColor[1], ballColor[2]);
    s.noStroke();
    s.circle(toScreenPointX(store.x1), toScreenPointY(store.y1), store.ballSize);
    s.circle(toScreenPointX(store.x2), toScreenPointY(store.y2), store.ballSize);
    s.circle(toScreenPointX(0), toScreenPointY(0), 8);
}

export const toScreenPointX = (x) => {
    return x + s.width / 2;
}

export const toScreenPointY = (y) => {
    return y + s.height / 2;
}