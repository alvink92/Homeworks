document.addEventListener("DOMContentLoaded", function(){
  const c = document.getElementById("mycanvas");
  c.width = 500;
  c.height = 500;

  const ctx = c.getContext('2d');

// draw square
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, 100, 100);


// draw circle
  ctx.beginPath();
  ctx.arc(50,50,50,0,8, false);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 1;
  ctx.stroke();

  // draw pac man
    ctx.beginPath();
    ctx.arc(150,150,50,.75,5.5, false);
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 1;
    ctx.fillStyle = "yellow";
    ctx.stroke();
    ctx.fill();
});
