const minDistance = 100;
const obj = document.getElementById("no");
const yes = document.getElementById("yes");

const maxX = document.documentElement.clientWidth - 80;
const maxY = document.documentElement.clientHeight - 80;

document.addEventListener("mousemove", function (evt) {
  const objCoords = obj.getBoundingClientRect();
  const distance = calcDistance(
    evt.clientX,
    evt.clientY,
    objCoords.x,
    objCoords.y
  );
  if (distance < minDistance) {
    obj.style.left = getRandomInt(0, maxX) + "px";
    obj.style.top = getRandomInt(0, maxY) + "px";
  }
});

function calcDistance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const userAgent = navigator.userAgent;

yes.addEventListener("click",  () => {
  let currentDate = new Date();
  const response =  fetch("/")

  const data =  response.json
  console.log(data)
  alert("aaaaaa");
  
});


