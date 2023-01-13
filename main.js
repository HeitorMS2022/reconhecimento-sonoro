function iniciar(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/olYgnvx3p/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("som").innerHTML = 'Posso ouvir - '+ results[0].label;
        document.getElementById("som").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("precisão").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+ "%";
        document.getElementById("precisão").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        alien1 = document.getElementById("img1");
        alien2 = document.getElementById("img2");
        alien3 = document.getElementById("img3");
        alien4 = document.getElementById("img4");
        if(results[0].label == "palmas"){
            alien1.src = 'aliens-01.gif';
            alien2.src = 'aliens-02.png';
            alien3.src = 'aliens-03.png';
            alien4.src = 'aliens-04.png';
        }
        else if(results[0].label == "estalos"){
            alien1.src = 'aliens-01.png';
            alien2.src = 'aliens-02.gif';
            alien3.src = 'aliens-03.png';
            alien4.src = 'aliens-04.png';
        }
        else if(results[0].label == "Batuque com canetinhas"){
            alien1.src = 'aliens-01.png';
            alien2.src = 'aliens-02.png';
            alien3.src = 'aliens-03.gif';
            alien4.src = 'aliens-04.png';
        }
        else if(results[0].label == "Background Noise"){
            alien1.src = 'aliens-01.png';
            alien2.src = 'aliens-02.png';
            alien3.src = 'aliens-03.png';
            alien4.src = 'aliens-04.gif';
        }
    }
}