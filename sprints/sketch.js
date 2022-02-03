let video;
let classifier;
let label = "";

let imageModelURL = 'https://teachablemachine.withgoogle.com/models/-lk1tsFED/';


function preload(){
//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sTpXK2sQr/');

//https://teachablemachine.withgoogle.com/models/sTpXK2sQr/

classifier = ml5.imageClassifier(imageModelURL + 'model.json');

}

function setup() {
    createCanvas(640,520);
    video = createCapture(VIDEO);
    video.hide();
    classifyVideo();
    
}

function classifyVideo() {
    classifier.classify(video, gotResults)
}

function draw() {
    image(video,0,0);
  background(0);

    textSize(180);
    textAlign(CENTER, CENTER);
    fill(255);
  // text(label,width/2, height );



let emoji = "🕶️";
    if(label == 'Sunglasses'){
    //label == 'Light bulb'
      emoji = '🕶️';
        //console.log('hello cool');
    }else if(label == 'Bionicle'){
       emoji = '🤖';
      //  console.log('hello Bionicle');
    }
    else if(label == 'Mewtwo'){
       emoji = '🃏';
      //  console.log('hello trainer');
    }
    else if(label == 'Mouse'){
        emoji =  '🖱️';
      //  console.log('hello gamer');
    }
    else if(label == 'Book'){
   emoji = '📘';
        //console.log('hello nerd');
    }
    text(emoji, width/2, height/3);
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
