import { cx0, cy0, r0, svgns } from "./constant";
import { querySelector, setAttributeNbr } from "./misc";
import "./style.css";

console.log("coucou");

const samples = 10;
const multiplicationFactor = 2;

// add the small circles (samples)
const sampleContainer = querySelector("g.samples");
for (let i = 0; i < samples; i++) {
  const angle = (i * 2 * Math.PI) / samples - Math.PI / 2;
  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);

  const circle = document.createElementNS(svgns, "circle");
  setAttributeNbr(circle, "cx", cx);
  setAttributeNbr(circle, "cy", cy);
  setAttributeNbr(circle, "r", 1);
  sampleContainer.appendChild(circle);
}

// add the lines
const lineContainer = querySelector("g.lines");
for (let i = 0; i < samples; i++) {
  const angle1 = (i * 2 * Math.PI) / samples - Math.PI / 2;
  const x1 = cx0 + r0 * Math.cos(angle1);
  const y1 = cy0 + r0 * Math.sin(angle1);
  const angle2 =
    (i * multiplicationFactor * 2 * Math.PI) / samples - Math.PI / 2;
  const x2 = cx0 + r0 * Math.cos(angle2);
  const y2 = cy0 + r0 * Math.sin(angle2);

  const line = document.createElementNS(svgns, "line");
  setAttributeNbr(line, "x1", x1);
  setAttributeNbr(line, "y1", y1);
  setAttributeNbr(line, "x2", x2);
  setAttributeNbr(line, "y2", y2);

  lineContainer.appendChild(line);
}
