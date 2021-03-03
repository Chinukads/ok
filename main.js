Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100,
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
        
    });

};
console.log('ml5 version:', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ug04iy3Fn/'),modelLoaded();
function modelLoaded(){
    console.log("Your Model Is Loaded ! #havefun");
}
function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML = results[0].label;
      document.getElementById("result_emotion_name2").innerHTML = results[1].label;
      prediction_1 = results[0].label;
      prediction_2 = results[1].label;
      speak();
      if(results[0].label == "amazing")
      {
          document.getElementById("update_emoji").innerHTML = "&#128076;";
      }
      if(results[0].label == "peace")
      {
          document.getElementById("update_emoji").innerHTML = "&#9996;";
      }
      if(results[0].label == "hello")
      {
          document.getElementById("update_emoji").innerHTML = "&#128400;";
      }
  
      if(results[1].label == "amazing")
      {
          document.getElementById("update_emoji").innerHTML = "&#128076;";
      }
      if(results[1].label == "peace")
      {
          document.getElementById("update_emoji").innerHTML = "&#9996;";
      }
      if(results[1].label == "hello")
      {
          document.getElementById("update_emoji").innerHTML = "&#128400;";
      }
    }
  }
  
  
  
