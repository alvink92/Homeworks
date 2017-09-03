document.addEventListener("DOMContentLoaded", function(){
  const c = document.getElementById("mycanvas");
  c.width = 500;
  c.height = 500;

  const ctx = c.getContext('2d');

  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, 100, 100);

  ctx.beginPath();
  ctx.arc(50,50,50,0,8, false);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 3;
  ctx.stroke();
});
ctx.beginPath();
ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();
