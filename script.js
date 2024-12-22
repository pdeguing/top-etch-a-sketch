const container = document.querySelector("#container");
let gridSize = 16;

function getRandomHSLColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100);
  const lightness = Math.floor(Math.random() * 100);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function buildGrid(size) {
  container.replaceChildren();
  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");

    newDiv.className = "square";
    newDiv.style.flexBasis = `calc(100% / ${gridSize})`;
    newDiv.style.maxWidth = `calc(100% / ${gridSize})`;
    container.appendChild(newDiv);
  }

  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", changeColorOnHover);
  });
}

buildGrid(gridSize);

function changeColorOnHover(event) {
  event.target.style.backgroundColor = getRandomHSLColor(); // e.g., 'red', '#FF0000', 'rgba(255, 0, 0, 0.5)'
}

const button = document.querySelector("#new");

button.addEventListener("click", () => {
  gridSize = prompt("please enter a grid size number (max 100)");

  if (gridSize <= 0 || gridSize > 100) gridSize = 16;
  buildGrid(gridSize);
});
