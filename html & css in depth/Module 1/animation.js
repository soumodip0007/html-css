let canvas = document.getElementById('my_canvas');
let context = canvas.getContext('2d');

const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;

function moveBall() {
    if(position + radius > 640) {
        moveSpeed = -speed;
    } else if(position - radius < 0) {
        moveSpeed = speed;
    }
}