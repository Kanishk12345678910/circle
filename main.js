var mouseEvent = "empty";


canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

color ="black";
width_of_line = 1;
//event one is mouse down
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    color = document.getElementById("icolor").value
    width_of_line = document.getElementById("iwidth").value
    mouseEvent = "mouseDown"
}
//event one is mouse move
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width_of_line
         
        ctx.arc(current_x,current_y,20,0,360)
        ctx.stroke()
    }
    
    
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseEvent = "mouseleave"
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}