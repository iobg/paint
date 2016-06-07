var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var painting = document.getElementById("paint");
var paint_style=getComputedStyle(painting);
var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255); 
function randomize(){
r = Math.floor(Math.random()*255);
g = Math.floor(Math.random()*255);
b = Math.floor(Math.random()*255); 
context.strokeStyle=`rgba(${r},${g},${b},1`;

}



canvas.width=parseInt(paint_style.getPropertyValue('width'));
canvas.height=parseInt(paint_style.getPropertyValue('height'));
var mouse = {
	x:0,
	y:0
};
canvas.addEventListener("mousemove", function(){
	mouse.x=event.pageX-this.offsetLeft;
	mouse.y=event.pageY-this.offsetTop;

}, false);
context.lineWidth=3;
context.lineJoin='round';
context.lineCap='round';
context.strokeStyle=`rgba(${r},${g},${b},1`;

canvas.addEventListener("mousedown", function(){
	randomize();
	context.beginPath();
	context.moveTo(mouse.x,mouse.y);

	canvas.addEventListener("mousemove", onPaint,false);

},false);

canvas.addEventListener("mouseup", function(){
	canvas.removeEventListener("mousemove", onPaint,false);
},false);
var onPaint=function(){
	randomize();
	context.lineTo(mouse.x,mouse.y);
	context.stroke();
}
