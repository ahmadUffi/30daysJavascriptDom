const format = "px";
const rootValue = document.querySelector(":root");
const getrootValue = getComputedStyle(document.documentElement);
const boxShadow = document.querySelector(".box-shadow");
const button = document.querySelector(".copy");

// results
function results() {
  const xresult = getrootValue.getPropertyValue("--Xspacing");
  const yresult = getrootValue.getPropertyValue("--Yspacing");
  const blur = getrootValue.getPropertyValue("--blur");
  const spreed = getrootValue.getPropertyValue("--spreed");
  const color = getrootValue.getPropertyValue("--color");
  button.textContent = "Copy";

  boxShadow.textContent = `box-shadow: ${xresult} ${yresult} ${blur} ${spreed} ${color};`;
}

// xSpacing function
const xInput = document.getElementById("xspacing");
const xValue = document.querySelector(".xvalue");
function xSpacing(e) {
  xValue.textContent = `${this.value}`;
  rootValue.style.setProperty("--Xspacing", `${this.value}${format}`);

  results();
}
xInput.addEventListener("input", xSpacing);

// ySpasing
const yInput = document.getElementById("yvalue");
const yValue = document.querySelector(".yvalue");
function ySpacing(e) {
  yValue.textContent = `${this.value}`;
  rootValue.style.setProperty("--Yspacing", `${this.value}${format}`);
  results();
}
yInput.addEventListener("input", ySpacing);

// blur
const blurValue = document.querySelector(".blurValue");
const blurInput = document.getElementById("blurValue");
function blurRadius(e) {
  blurValue.textContent = `${this.value}`;
  rootValue.style.setProperty("--blur", `${this.value}${format}`);
  results();
}
blurInput.addEventListener("input", blurRadius);

// spreed
const spreedValue = document.querySelector(".spreedValue");
const spreedInput = document.getElementById("spreedValue");
function spreed(e) {
  spreedValue.textContent = `${this.value}`;
  rootValue.style.setProperty("--spreed", `${this.value}${format}`);
  results();
}
spreedInput.addEventListener("input", spreed);

// color and opacity
const colorValue = document.querySelector(".colorValue");
const colorInput = document.getElementById("colorValue");
const opacityValue = document.querySelector(".opacityValue");
const opacityInput = document.getElementById("opacityValue");

function color(e) {
  const hexa = this.value;
  const rgbaColor = HexToRGBA(hexa);
  colorValue.textContent = rgbaColor;
  rootValue.style.setProperty("--color", rgbaColor);
  results();
}
colorInput.addEventListener("input", color);

function opacity(e) {
  opacityValue.textContent = ` ${this.value}`;
  const getRGB = getrootValue.getPropertyValue("--color");
  const splite = getRGB.split(",");
  const a = this.value;
  splite.splice(3, 1, ` ${a})`);
  const result = splite.join();

  rootValue.style.setProperty("--color", result);
  results();
}

// convert hexa to rgb function
function HexToRGBA(hexa) {
  const hex = hexa.replace("#", "");

  //   membagi menjadi R G B A
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(5, 6), 16);
  const a = opacityInput.value;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

opacityInput.addEventListener("input", opacity);

// copy
button.addEventListener("click", function () {
  const copyValue = document.querySelector(".box-shadow").textContent;
  navigator.clipboard.writeText(copyValue);
  button.textContent = "Text Copied";
});
