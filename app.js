var ele = document.getElementById("one");

console.log(ele);

ele.style.backgroundColor = "blue";
var body = document.body;

var mdflag = true;

body.addEventListener('mousedown', function() {
    isMousedown = true;
});

body.addEventListener('mousemove', move);
body.addEventListener('mouseup', function() {
    isMousedown = false;
    body.style.backgroundColor = "white";

});
ele.addEventListener('mouseenter', enter);
ele.addEventListener('mouseleave', eleleave);

var timer;
var isMousedown = false;

function move(event) {

    if (isMousedown) {
        body.style.backgroundColor = "lightblue";
        ele.style.top = event.pageY + "px";
        ele.style.left = event.pageX + "px";
        ele.innerHTML = "Wow..,you are dragging me"
        console.log("hello i am calling")
    }
}

function enter() {
    ele.style.backgroundColor = "blue";
    ele.innerHTML = "Drag me";
}

function eleleave() {
    ele.style.backgroundColor = "blue";
    ele.innerHTML = "Ok.., so you want me to be here";
}