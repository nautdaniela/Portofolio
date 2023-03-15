var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var fontSize = 16;
var columns = Math.floor(W / fontSize);
var drops = [];
for(var i=0; i<columns; i++){
    drops.push(0);
}
var str = "JavaScript Hacking Effect";
function draw(){
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0, 0, W, H);
    context.fontSize = "700 " + fontSize + "px";
    context.fillStyle = "#d2cb0f";
    for(var i=0; i<columns; i++){
        var index = Math.floor(Math.random()*str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if(y >= canvas.height && Math.random() > 0.99){
            drops[i] = 0;
        }
        drops[i]++;
    }
}
draw();
setInterval(draw, 35);

var context2 = document.querySelector("canvas").getContext("2d");
var render = function () {
    context.canvas.width = document.documentElement.clientWidth * 0.5;
    context.canvas.height = document.documentElement.clientHeight * 0.5;

    context.fillStyle = "#d2cb0f";
    context.fillRect(0, 0, context2.canvas.width, context.canvas.height);
};
window.addEventListener("resize", render);
render();

