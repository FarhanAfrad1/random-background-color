function randomColor() {
  return Math.floor(Math.random() * 256);
}
const body = document.body;
const btn = document.getElementById("btn");

const p = document.createElement("p");
p.style.fontSize = '20px'
btn.addEventListener("click", (event) => {
  console.log(event.target.parentNode);
  body.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  p.innerText = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  event.target.parentNode.appendChild(p);
  
});
