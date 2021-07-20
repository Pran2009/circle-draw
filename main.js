canvas = document.getElementById("canv");
ctx = canvas.getContext("2d");


//drawing code
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(200,200,45,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(300,200,45,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(400,200,45,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="gold";
ctx.lineWidth=5;
ctx.arc(250,265,45,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="limegreen";
ctx.lineWidth=5;
ctx.arc(350,265,45,0,2*Math.PI);
ctx.stroke();