console.log("Snake loaded");

//Creates a snake at x,y and gives the them the following speed.
function snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;
  this.snakeTail = [];

  this.direction = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  //Calculate the distance between fruitX,fruitY and this.x this.y
  this.distance = function(numX, numY) {
    var distance;

    var distanceSqrd = (pow((this.x - numX), 2)) + (pow((this.y - numY), 2));
    // console.log(distanceSqrd);
    distance = sqrt(distanceSqrd);

    return distance;
  }

  //Compares the fruit(x,y)  to snakePos
  this.eat = function(fruitX, fruitY) {

    var distPoints = snake.distance(fruitX, fruitY);

    if (distPoints < 1) {
      // console.log("Less than 1");
      this.total++;
      // console.log(this.total);
      return true;
    } else {
      return false;
    }

  }

  this.gameOver = function() {
    for (let i = 0; i < this.snakeTail.length; i++) {
      if (snake.distance(this.snakeTail[i].x, this.snakeTail[i].y) < 1) {
        console.log("Game Over!");
        alert("GAME OVER!");
        this.x = 0;
        this.y = 0;
        this.snakeTail = [];
        this.total = 0;
      }
    }
  }

  this.update = function() {
    for (var i = 0; i < this.snakeTail.length - 1; i++) {
      this.snakeTail[i] = this.snakeTail[i + 1];
    }
    if (this.total >= 1) {
      this.snakeTail[this.total - 1] = createVector(this.x, this.y);
    }
    this.x = this.x + this.xspeed * pnt;
    this.y = this.y + this.yspeed * pnt;

    this.x = constrain(this.x, 0, width - pnt);
    this.y = constrain(this.y, 0, height - pnt);

  }
  //Draws the snake on the screen according to the x and y.
  this.show = function() {
    for (var i = 0; i < this.snakeTail.length; i++) {
      fill('rgb(153,255,153)');
      rect(this.snakeTail[i].x, this.snakeTail[i].y, pnt, pnt);
    }
    fill('rgb(0,153,0)');
    rect(this.x, this.y, pnt, pnt);

  }
}
