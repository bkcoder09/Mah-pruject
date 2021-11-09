Webcam.set({
    height:300,
    width:600,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Something
}

function setup(){
    console.log("Canvas");
    canvas = createCanvas(1000, 450);
    canvas.position(200,200);
}

function draw(){
    circle(150, 75, 100);
    rect(200, 50, 600, 50);
    circle(150, 375, 100);
    rect(825, 125, 50, 200);
    circle(850, 75, 100);
    rect(200, 350, 600, 50);
    circle(850, 375, 100);
    rect(125, 125, 50, 200);
    circle(490, 75, 100);
    circle(490, 375, 100);
}

function takeSnapshot(){
    save("Photo_Frame_Image.png");
}