var snake;
var pnt = 20;
var foody;
var foodx;

function setup() {
  createCanvas(600, 600);
  snake = new snake();
  frameRate(10);
  ranSpawn();
}

function randomBoard() {
  let rows = floor(width/30);
  let cols = floor(height/30);

  for(let i=0; i<cols * 2; i++){
    for(let j=0; j<rows * 2; j++){
      if((i + j + 1) % 2 == 0) {
        fill('rgb(96,96,96)');
        // rect(i * rows, j * cols, (i + 20) * rows, (j + 20) * cols);
      } else {
        fill(51);
      }
      rect(i * rows, j * cols, (i + 20) * rows, (j + 20) * cols);
    }
  }
}



function ranSpawn() {
  console.log("ranSpawn");
  var gridC = floor(width / pnt);
  var gridR = floor(width / pnt);
  foodx = floor(random(gridC)) * pnt;
  foody = floor(random(gridR)) * pnt;

  rect(foodx, foody, pnt, pnt);
}

function draw() {
  background('rgb(85,107,47)');

  randomBoard();

  if (snake.eat(foodx, foody)) {
    ranSpawn();
  }
  snake.gameOver();
  snake.update();
  snake.show();

  fill(255, 0, 100);
  rect(foodx, foody, pnt, pnt); //Draw 1st piece of fruit on the map
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.direction(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.direction(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.direction(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.direction(1, 0);
  }
}
