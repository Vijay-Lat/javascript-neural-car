const canvas = document.getElementById("myCanvas");
canvas.height = innerWidth;
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width*.9);
const car = new Car(100, 100, 30, 50);
// car.draw(ctx);

animate();

function animate() {
  car.update();
  canvas.height = window.innerHeight;
  road.draw(ctx);
  car.draw(ctx);
  console.log(window.innerHeight, "height");
  // request animation frame calls the animate function again and again that gives the illusion of movement
  requestAnimationFrame(animate);
}
