

function preload(){
    vid = createVideo('video.mp4');
    vid.hide();
}

function draw(){
    image(vid , 0 , 0 , 400 , 450);
    if(status !=""){
        coco.detect(video , gotPoses);
    if(objects[0].label != object){
document.getElementById('status_btn').innerHTML = "No Object Found!"
    }else{
        for(a = 0; a<= objects.length ; a++){
            document.getElementById('status_btn').innerHTML = 'Status:identified';
            document.getElementById('num_btn').innerHTML = objects.length;
            r = random(234);
            g = random(145);
            b = random(90);
        
            fill(r , b , g);
            stroke(b , r , g);
            noFill();
            rect(objects[a].x , objects[a].y , objects[a].width ,objects[a].height );
            text(objects[a].label,objects[a].x , objects[a].y );
            percentage = floor(objects[a].confidence * 100);
        }
    }
    }
}

function setup(){
    canva = createCanvas(400 , 450);
    canva.position(650 , 300)
}

function start(){
    document.getElementById('status_btn').innerHTML = 'Status: Identifying Objects';
    coco = ml5.objectDetector('cocossd' , check);
    object = document.getElementById('input').value;
}

function check(){
    console.log('loading_done');
    status = true;
    vid.loop();
    vid.speed(3);
    vid.volume(0.5);
}

function gotPoses(error , results){
    if(error){

        console.log(error);

    }else{
        console.log(results);
        objects = results;
    }
}