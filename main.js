color = "black";
canvas=document.getElementById("can");
ctx= canvas.getContext("2d");
var m_event = "empty";
var x_last,y_last;
width=5;
var rds = 30;
canvas.addEventListener("mousedown",md);
function clr() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function md(e){
    color = document.getElementById("c").value;
    width = document.getElementById("w").value;
    rds = document.getElementById("r").value;
    m_event= "mousedown";
    
}
canvas.addEventListener("mousemove",mm);
function mm(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if (m_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(currentx,currenty,rds,0,2*Math.PI);
        ctx.stroke()
    }
    x_last=currentx;
    y_last=currenty;

}
canvas.addEventListener("mouseup",mu);
function mu(e){
    m_event= "mouseup"; 
}
canvas.addEventListener("mouseleave",ml);
function ml(e){
    m_event= "mouseleave"; 
}
