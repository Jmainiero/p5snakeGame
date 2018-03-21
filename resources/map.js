function checkBoarder() {
  var gridC = floor(width/pnt);
  var gridR = floor(width/pnt);
  var ranX = floor(random(gridC)) * pnt;
  var ranY = floor(random(gridR)) * pnt;

  if(let i =0; i<height; i++){
    rect(ranX,ranY, 20,20);
  }

}
