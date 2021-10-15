var selected;
var humanselected;
var roundcounter = 0;
var points = 0;
var resultimg1 = document.getElementById("robotchoiceshower");
var playershower = document.getElementById("demo");
var tooearly = true;
startround();
function startround() {
    document.getElementById("shii").innerHTML = roundcounter + 1;
    empty();
    setTimeout(function(){ replacetimer("3"); }, 1000);
    setTimeout(function(){ replacetimer("2"); }, 2000);
    setTimeout(function(){ replacetimer(resetquestionmark()); }, 2000);
    setTimeout(function(){ replacetimer("2"); }, 2000);
    setTimeout(function(){ replacetimer("1"); }, 3000);
    setTimeout(function(){ replacetimer("0"); }, 4000);
    setTimeout(function(){ timerdone(); }, 5000);
    document.getElementById("rock").addEventListener("click", rock);
    document.getElementById("scissors").addEventListener("click", scissors);
    document.getElementById("paper").addEventListener("click", paper);
    function rock() {
        document.getElementById("demo").innerHTML = "Stein";
        var resultimg2 = document.getElementById("demo");
        resultimg2.src = "img/rock.png";
        selected = "rock";
        humanselected = 1;
    }
    function scissors() {
        document.getElementById("demo").innerHTML = "Saks";
        var resultimg2 = document.getElementById("demo");
        resultimg2.src = "img/scissors.png";
        selected = "scissors";
        humanselected = 2;
    }
    function paper() {
        document.getElementById("demo").innerHTML = "Papir";
        var resultimg2 = document.getElementById("demo");
        resultimg2.src = "img/paper.png";
        selected = "paper";
        humanselected = 3;
    }
    function empty() {
        document.getElementById("demo").innerHTML = "";
        selected = "";
        humanselected = "";
    }


}



function checkifcanpredict() {

}

function resetquestionmark() {
    resultimg1.src = "img/questionmark.png";
    if(humanselected == "") {
        playershower.src = "img/questionmark.png";
    }

}
function replacetimer(number) {
    document.getElementById("timer").innerHTML = number;
}
function timerdone() {
    
    if(humanselected == "") {
        alert("Du må velge noe");
        startround();
        robotchoice = 0;
    }
    else{
        //robot velger system
        var randomnumber = Math.random()*3;
        var robotchoice;
        if(randomnumber <= 1){
            robotchoice = 1;
        }
        else if((randomnumber <= 2) && (randomnumber > 1)) {
            robotchoice = 2;
        }
        else if(randomnumber > 2) {
            robotchoice = 3;
        }
        //bytte bilde på spørsmålstegn
        if(robotchoice == 1) {
            resultimg1.src = "img/rock.png";
        }
        else if(robotchoice == 2){
            resultimg1.src = "img/scissors.png";
        }
        else if(robotchoice == 3){
            resultimg1.src = "img/paper.png";
        }
        else{
            resultimg1.src = "img/questionmark.png";
        }





        //regner ut hvem som vinner runden
        if(humanselected == robotchoice) {
            result("Likt", "draw");
        }
        else if(humanselected == 1 && robotchoice == 2) {
            result("Du vant! Robot valgte saks", "won");
        }
        else if(humanselected == 1 && robotchoice == 3) {
            result("Du tapte, Robot valgte papir", "loss");
        }
        else if(humanselected == 2 && robotchoice == 1) {
            result("Du tapte, Robot valgte stein", "loss");
        }
        else if(humanselected == 2 && robotchoice == 3) {
            result("Du vant! Robot valgte papir", "won");
        }
        else if(humanselected == 3 && robotchoice == 1) {
            result("Du vant! Robot valgte stein", "won");
        }
        else if(humanselected == 3 && robotchoice == 2) {
            result(("Du tapte, Robot valgte saks"), "loss");
        }
    } 
}
function result(message, winlossordraw) {
    document.getElementById("winnerthing").innerHTML = message;
    roundcounter += 1;
    if(winlossordraw == "loss") {
        points -=1;
    }
    if(winlossordraw == "won") {
        points +=1;
    }

    if(roundcounter < 3) {
        startround();
    }
    else{
        finished();
    }
}
function finished() {
    var resultimg = document.getElementById("result");
    if(points > 0) {
        resultimg.src = "img/trophy.png";
        document.getElementById("Audio2").play();
    }
    else if(points < 0) {
        resultimg.src = "img/angryface.png";
        document.getElementById("Audio1").play();
    }
    else if(points == 0) {
        resultimg.src = "img/draw.png";
        document.getElementById("Audio3").play();
    }
    setTimeout(function(){ window.close("MyWindow"); }, 3000);
}





