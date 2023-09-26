console.log("coucou");

const cx0 = 0;
const cy0 = 0;
const r0 = 55;

const svgns = "http://www.w3.org/2000/svg";
const samples = 10;
const container = document.querySelector("g.samples");

for (let i = 0; i < samples; i++) {
  const angle = (i * 2 * Math.PI) / samples - Math.PI / 2;
  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", cx);
  circle.setAttributeNS(null, "cy", cy);
  circle.setAttributeNS(null, "r", 1);

  container.appendChild(circle);
}
