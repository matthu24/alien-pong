const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

 function Ball () {
  this.ballX = canvas.width/2;
  this.ballY = canvas.height-100;
  this.ballRadius = 10;
  this.ballDX = 2;
  this.ballDY = -2;

}

Ball.prototype.drawBall = function drawBall(ship) {
  ctx.beginPath();
  ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#C0C0C0";
  ctx.fill();
  ctx.closePath();

  if(this.ballX + this.ballDX > canvas.width-this.ballRadius || this.ballX + this.ballDX < this.ballRadius) {
    this.ballDX = -this.ballDX;
  }
  if(this.ballY + this.ballDY < this.ballRadius) {
      this.ballDY = -this.ballDY;
  }else {
    //if this.ball hits the ship it changes direction
    if(this.ballY + this.ballDY > canvas.height-this.ballRadius-ship.shipHeight&&this.ballX > ship.shipX && this.ballX < ship.shipX + ship.shipWidth) {
      this.ballDY = -this.ballDY;
    }else if (this.ballY + this.ballDY > canvas.height+this.ballRadius ) {
    //if ship and this.ball are on the same y coordinate
    // alert("Game over");
      // document.location.reload();
      return false;
    }
  }
  this.ballX+=this.ballDX;
  this.ballY+=this.ballDY;

};



export default Ball;
