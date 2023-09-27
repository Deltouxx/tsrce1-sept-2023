import { svgns } from "./constant";
import { getAngle, getPointOnCircle } from "./math";
import { querySelector, setAttributeNbr } from "./misc";
import "./style.css";

console.log("coucou");

const samples = 10;
const multiplicationFactor = 2;

// add the small circles (samples)
const sampleContainer = querySelector("g.samples");
for (let i = 0; i < samples; i++) {
  const angle = getAngle(i, samples);
  const { x: cx, y: cy } = getPointOnCircle(angle);

  const circle = document.createElementNS(svgns, "circle");
  setAttributeNbr(circle, "cx", cx);
  setAttributeNbr(circle, "cy", cy);
  setAttributeNbr(circle, "r", 1);
  sampleContainer.appendChild(circle);
}

// add the lines
const lineContainer = querySelector("g.lines");
for (let i = 0; i < samples; i++) {
  const p1 = getPointOnCircle(getAngle(i, samples));
  const p2 = getPointOnCircle(getAngle(i * multiplicationFactor, samples));

  const line = document.createElementNS(svgns, "line");
  setAttributeNbr(line, "x1", p1.x);
  setAttributeNbr(line, "y1", p1.y);
  setAttributeNbr(line, "x2", p2.x);
  setAttributeNbr(line, "y2", p2.y);

  lineContainer.appendChild(line);
}
