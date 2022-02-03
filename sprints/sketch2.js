let video;
let classifier;
let label = "";
let fr = 60;

let imageModelURL = 'https://teachablemachine.withgoogle.com/models/-lk1tsFED/';


function preload(){
//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sTpXK2sQr/');

//https://teachablemachine.withgoogle.com/models/sTpXK2sQr/

classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  sun = loadImage("img/sun.png");
energy=loadImage("img/energy.gif");
drip=loadImage("img/water.gif");
mud = loadImage("img/mud.png");
crack= loadImage("img/crack.png");

}

function setup() {
    createCanvas(640,520);
    video = createCapture(VIDEO);
    video.hide();
    classifyVideo();
    frameRate(fr);
    click = loadSound('img/click.mp3');
    water = loadSound('img/water.mp3');
    pageflip = loadSound('img/pageflip.mp3');
    ding= loadSound('img/ding.mp3');
    pulse= loadSound('img/pulse.mp3');
   robot= loadSound('img/robot.wav');
}

function classifyVideo() {
    classifier.classify(video, gotResults)
}

function draw() {
    image(video,0,0);
  //background(0);
 
    textSize(100);
    textAlign(CENTER, CENTER);
    fill(255);
  // text(label,width/2, height );



let emoji = "🕶️";
    if(label == 'Sunglasses'){
    //label == 'Light bulb'
      emoji = '🕶️';
      //image(sun,width /3, height/20,200, 200);
      fill(255, 217, 66);
      filter(INVERT);
      filter(DILATE);
      
    //  filter(ERODE, 5);
    //  filter(GRAY);
  
      //ding.play();

        //console.log('hello cool');
    }else if(label == 'Bionicle'){
       emoji = '🤖';
       fill(128);
         image(mud,width/16, height/16,320,260);
         filter(INVERT);
       
      // robot.play();
      //  console.log('hello Bionicle');
    
    }
    else if(label == 'Mewtwo'){ 
       emoji = '🃏';
       fill(215,135,255);
       //pulse.play();
       //filter(POSTERIZE, 3);
       filter(INVERT);
     //  image(crack,width/16, height/16,512,416);
      //  console.log('hello trainer');
    }
    else if(label == 'Mouse'){
        emoji =  '🖱️';
        fill(38, 127, 0);
       // click.play();
      //  console.log('hello gamer');
    }
    else if(label == 'Book'){
   emoji = '📘';
   fill(0, 74, 127);
// pageflip.play();
filter(BLUR,3);
   //image(drip,width /3, height/20,200, 200);
        //console.log('hello nerd');
    }
    text(emoji, width/2, height/2);
}
    //};

    function gotResults(error, results) {
        if (error) {
            console.error(error);
            return;
        }
     label = results[0].label;
    console.log(results[0].label);
    classifyVideo();
}
