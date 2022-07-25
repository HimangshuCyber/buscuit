song="";
on_or_off = false;
function preload(){
    song = loadSound("buscuit.mp3");
}
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 400);
}
function playing(){
    if( on_or_off == false){
        song.play();
        on_or_off = true;
        document.getElementById("play").innerHTML = "Stop";
    }
    else if( on_or_off == true){
        song.stop();
        on_or_off = false;
        document.getElementById("play").innerHTML = "Play";
    }

}