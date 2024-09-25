const btn = document.querySelector("#picker");
const colorDiv = document.getElementById("colorBox");
const colorDescription = document.getElementById("inner");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function getRandomHexCode() {
  const hexCharacters = "0123456789abcdef";
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    hexCode += hexCharacters[random(15)];
  }

  return hexCode;
}
// console.log(getRandomHexCode());

function hexTorgb(hexCode){
  const newRgb = hexCode.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
console.log(newRgb);
    return newRgb;
}


btn.addEventListener("click", () => {
    const rndHex = getRandomHexCode();
    const rgbColor = hexTorgb(rndHex);
    colorDiv.style.backgroundColor = rndHex;
    // colorDescription.textContent = rndHex + " | " + "rgb("+ rgbColor[0] +", " + rgbColor[1] +", " + rgbColor[2] +")";

    colorDescription.textContent = `${rndHex} | rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
});
