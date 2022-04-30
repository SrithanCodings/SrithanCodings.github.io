const question1 = ["What are the two major elements making up the sun?", "Nitrogen and Oxygen", "Hydrogen and Helium", "Methane and Carbon-dioxide", "Carbon-dioxide and Oxygen", 2, 1, 3];
const question2 = ["Which organ is responsible for regulating metabolism?", "Kidneys", "Heart", "Brain", "Lungs", 4, 1, 2];
const question3 = ["Which of these is not built by Shah Jahan", "Jama Masjid", "Red Fort", "Moti Masjid", "Agra Fort", 4, 1, 2];
const question4 = ["What does DNA stand for?", "Deoxyribonucleic Acid", "Deoxidizing Nuclear Acid", "Decarbobonucleic Acid", "Decarbodizing Nuclear Acid", 1, 2, 4]
const question5 = ["Which is the fastest fish in the sea?", "Dolphin", "Sailfish", "Blue Whale", "Mandarin fish", 2, 1, 4];
const question6 = ["Alexander invaded India in", "328 B.C", "330 B.C", "320B.C", "326 B.C", 4, 2, 3];
const question7 = ["Which programming language is used to give functionality to websites?", "Java", "Python", "Javascript", "HTML", 3, 2, 4];
const question8 = ["What are the the people who study dinosaur fossils called as", "Archaeologist", "Ichthyologist", "Palaeontologist", "Dinologist", 3, 1, 4];
const question9 = ["Who won triple Olympic gold at the 2008, 2012 and 2016 Olympics", "Usain Bolt", "P.V Sindu", "Charl Lewis", "Michael Phelps", 1, 3, 4];
const question10 = ["What is NASA an acronym of?", "National Aero Space Administration", "National Aerospace and Space technology Administration", "National Aeronautics and Space Administration", "National Aerospace and Space Administration", 3, 1, 2];
const question11 = ["Which of these is the smallest dwarf planet in the solar system", "Makemake", "Haumae", "Pluto", "Ceres", 4, 1, 2];
const question12 = ["What is the Mpemba effect?", "Hot water freezing faster than cold", "Hot water boiling faster than cold", "Hot water freezing slower than cold", "Hot water boiling slower than cold", 1, 3, 4];
const question13 = ["Which element is not named after a scientist", "Bohrium", "Mendelevium", "Daltonium", "Fermium", 3, 1, 4];
const question14 = ["Who among the following won the first Noble Prize?", "Wilhelm Conrad Röntgen", "Marie Curie", "Mother Teresa", "Albert Einstein", 1, 3, 4];
const question15 = ["Where did Gandhiji say these words: 'I believe that in the history of the world, there has not been a more genuinely democratic struggle for freedom than ours.'", "Dandi March", "Quit India Movement", "Speech before His Final Fast", "Round Table Conference Speech", 2, 1, 4];
const question16 = ["Who was the first ambadassor of the king of England to seek trading rights with the Mughal Empire and when did he visit India", "Sir Edward Thornton, 1612", "Sir Frederick Bruce, 1632", "Sir Julian Pauncefote, 1618", "Sir Thomas Roe, 1615", 4, 1, 2];
const changeQuestion = ["Who discovered electricity?", "Benjamin Franklin", "Paul Cornu", "Guglielmo Marconi", "Nikola Tesla", 1, 2, 4];
let isChangedQuestion = false;
let timerIsOver = false

const questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, changeQuestion];
let isAnswered = true;
let points = 0;
let first = true;
let stopTimer = false;

const questionBox = document.getElementById("Question");
let questionNumber = 1;
const option1 = document.getElementById("label1");
const option2 = document.getElementById("label2");
const option3 = document.getElementById("label3");
const option4 = document.getElementById("label4");
const options = [option1, option2, option3, option4]
const timer = document.getElementById("timer");
var i = 0;



const r1 = document.getElementById("1thousand");
const r2 = document.getElementById("2thousand");
const r3 = document.getElementById("3thousand");
const r4 = document.getElementById("5thousand");
const r5 = document.getElementById("t10thousand");
const r6 = document.getElementById("20thousand");
const r7 = document.getElementById("40thousand");
const r8 = document.getElementById("80thousand");
const r9 = document.getElementById("1.6lakhs");
const r10 = document.getElementById("t32lakhs");
const r11 = document.getElementById("6.4lakhs");
const r12 = document.getElementById("12.5lakhs");
const r13 = document.getElementById("25lakhs");
const r14 = document.getElementById("50lakhs");
const r15 = document.getElementById("1crore");
const r16 = document.getElementById("7crore");

let pollCancel1 = document.getElementById("pollsCancel1");
let pollCancel2 = document.getElementById("pollsCancel2");

let fiftyCancel1 = document.getElementById("fiftyCancel1");
let fiftyCancel2 = document.getElementById("fiftyCancel2");

let askComputerCancel1 = document.getElementById("askComputerCancel1");
let askComputerCancel2 = document.getElementById("askComputerCancel2");

let changeCancel1 = document.getElementById("changeCancel1");
let changeCancel2 = document.getElementById("changeCancel2");

const rupeesArray = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16];


function showQuestion(questions){
    
    timerIsOver = false;
    stopTimer = false;

    document.getElementById("AudiencePoll").style.display = "none";
    document.getElementById("AskTheExpert").style.display = "none"; 
    document.getElementById("kbcIcon").style.display = "block";

    document.getElementById("label1").style.background = "rgb(50, 8, 98)";
    document.getElementById("label2").style.background = "rgb(50, 8, 98)";
    document.getElementById("label3").style.background = "rgb(50, 8, 98)";
    document.getElementById("label4").style.background = "rgb(50, 8, 98)";

    /*option1.innerHTML = "A. "
    option2.innerHTML = "B. "
    option3.innerHTML = "C. "
    option4.innerHTML = "D. "*/

    if(i == 15){
        document.getElementById("audiencePoll").disabled = true;
        document.getElementById("fiftyFifty").disabled = true;
        document.getElementById("askTheComputer").disabled = true;
        document.getElementById("changeTheQuestion").disabled = true;

        pollCancel1.style.display = "block";
        pollCancel1.style.display = "block";
        fiftyCancel1.style.display = "block";
        fiftyCancel2.style.display = "block";

        askComputerCancel1.style.display = "block";
        askComputerCancel2.style.display = "block";

        changeCancel1.style.display = "block";
        changeCancel2.style.display = "block";
    }

    if(first){
    changeBackgroundOfAmount();
    }

    if(isAnswered === true){
        

        questionBox.innerHTML = questionNumber + ". " + questions[i][0];
        
        option1.innerHTML = "A. " + questions[i][1];
        option2.innerHTML = "B. " + questions[i][2];
        option3.innerHTML = "C. " + questions[i][3];
        option4.innerHTML = "D. " + questions[i][4];}
        
        isAnswered = false;
        setTimer();
}


    document.getElementById("label1").onclick = function()
    {
        stopTimer = true;
        setTimeout(function(){
            playSound("Button Click.mp4");
            blinkButton("label1");
            setTimeout(function(){
            if(isChangedQuestion == false){
                checkAnswer(1);
            }
            else{
                checkChangedAnswer(1);
            }
            }, 2000)
        }, 1000)    };

    document.getElementById("label2").onclick = function()
    {
        stopTimer = true;
        setTimeout(function(){
            playSound("Button Click.mp4");
            blinkButton("label2");
            setTimeout(function(){
            if(isChangedQuestion == false){
                checkAnswer(2);
            }
            else{
                checkChangedAnswer(2);
            }
            }, 2000)
        }, 1000)    };

    document.getElementById("label3").onclick = function()
    {
        stopTimer = true;
        setTimeout(function(){
            playSound("Button Click.mp4");
            blinkButton("label3");
            setTimeout(function(){
            if(isChangedQuestion == false){
                checkAnswer(3);
            }
            else{
                checkChangedAnswer(3);
            }
            }, 2000)
        }, 1000)    };

    document.getElementById("label4").onclick = function()
    {
        stopTimer = true;
        setTimeout(function(){
        playSound("Button Click.mp4");
        blinkButton("label4");
        setTimeout(function(){
        if(isChangedQuestion == false){
            checkAnswer(4);
        }
        else{
            checkChangedAnswer(4);
        }
        }, 2000)
    }, 1000)    };

function blinkButton(button){
    document.getElementById(button).style.background = "orange";
    setTimeout(function(){
        document.getElementById(button).style.background = "rgba(72, 22, 129, 0.984)";
        setTimeout(function(){
            document.getElementById(button).style.background = "orange";

        }, 650)
    }, 650)
    //document.getElementById("label1").innerHTML = "";
    
}
    
    
function checkAnswer(number){
    if(timer.innerHTML != 0){
    if(number == questions[i][5]){
        
        changeBackground(true, questions[i][5]);
        points++;
        //document.getElementById("points").innerHTML = points;
        //alert("Your answer is correct");
    }
    else if(number != questions[i][5]){
        changeBackground(false, number);
        //alert("Your answer is wrong");
    }
}
}

function checkChangedAnswer(number){
    if(timer.innerHTML != 0){
        if(number == changeQuestion[5]){
            changeChangedQuestionBackground(true, changeQuestion[5][5]);
            points++;
            //document.getElementById("points").innerHTML = points;
            //alert("Your answer is correct");
        }
        else if(number != changeQuestion[5][5]){
            changeChangedQuestionBackground(false, number);
            //alert("Your answer is wrong");
        }
        isChangedQuestion = false;
    }
}

function isChangedQuestionCorrect(isCorrectAnswer){
    
    isAnswered = true;
    if(changeQuestion[5] == 1){
        document.getElementById("label1").style.background = "green";
    }
    else if(changeQuestion[5] == 2){
        document.getElementById("label2").style.background = "green";
    }
    else if(changeQuestion[5] == 3){
        document.getElementById("label3").style.background = "green";
    }
    else if(changeQuestion[5] == 4){
        document.getElementById("label4").style.background = "green";
    }
    if(isCorrectAnswer){
        changeBackgroundOfAmount(isAnswered);
        playSound("Correct Answer.mp4");
    }
    questionNumber += 1;
    i += 1;
    timer.innerHTML = 0;
    
 }

 function changeChangedQuestionBackground(correct, option) {
    
    if(correct){
        isChangedQuestionCorrect(true);
        isAnswered = true;
        
        //console.log(isAnswered)
    }
    else{
        isChangedQuestionWrong(option);
        isAnswered = false;
        displayCheque(false);
        /*document.getElementById("MillioniareQuiz").style.display = "none";
        document.getElementById("ChequePrize").style.display = "block"
        //alert("You Won ₹" + rupeesArray[--i].innerHTML);*/
    }
    //setTimeout(changeBackground, 2000);
    
    if(i == 15){
        displayCheque(true);
        isAnswered = false;
    }
    else if(i!=16 && isAnswered){
        setTimeout(function(){showQuestion(questions)}, 1000);
    }
    else{
        setTimeout(function(){
        /*document.getElementById("label1").style.background = "rgba(255, 252, 80, 0.498)";
        document.getElementById("label2").style.background = "rgba(255, 252, 80, 0.498)";
        document.getElementById("label3").style.background = "rgba(255, 252, 80, 0.498)";
        document.getElementById("label4").style.background = "rgba(255, 252, 80, 0.498)";*/
    
        /*option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        */
        disableOptions();
        document.getElementById("fiftyFifty").disabled = true;
        document.getElementById("askTheComputer").disabled = true;  

        
    }, 1000);
    }


}

function playSound(audio) {   
    var beepsound = new Audio(audio);  
    beepsound.play();   
}   

function isChangedQuestionWrong(option){
    playSound("Wrong Answer.mp4");
    if(option == 1){
       document.getElementById("label1").style.background = "red";
    }
    else if(option == 2){
       document.getElementById("label2").style.background = "red";
    }
    else if(option == 3){
       document.getElementById("label3").style.background = "red";
    }
    else if(option == 4){
       document.getElementById("label4").style.background = "red";
    }
    changeBackgroundOfAmount(isAnswered);

    isChangedQuestionCorrect(false);
    
}


function changeBackground(correct, option) {
    console.log(i);
    if(correct){
        
        isCorrect(true);
        
        isAnswered = true;
        //console.log(isAnswered)
    }
    else{
        isWrong(option);
        isAnswered = false;
        setTimeout(function(){displayCheque(false);}, 1000)

        //console.log(i);
        
        //alert("You Won ₹" + rupeesArray[--i].innerHTML);
    }
    //setTimeout(changeBackground, 2000);
    
    if(i == 16){
        displayCheque(true);
        isAnswered = false;
        return;
    }
    else if(i!=16 && isAnswered){
        setTimeout(function(){showQuestion(questions)}, 5000);
    }
    else{
        setTimeout(function(){
        /*document.getElementById("label1").style.background = "rgba(255, 252, 80, 0.498)";
        document.getElementById("label2").style.background = "rgba(255, 252, 80, 0.498)";
        document.getElementById("label3").style.background = "rgba(255, 252, 80, 0.498)";
        document.getElementById("label4").style.background = "rgba(255, 252, 80, 0.498)";*/
    
        /*option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        */
        disableOptions();
        document.getElementById("fiftyFifty").disabled = true;
        document.getElementById("askTheComputer").disabled = true;  
        document.getElementById("audiencePoll").disabled = true;
        document.getElementById("changeTheQuestion").disabled = true;
        
    }, 1000);
    }

    

}
 //setTimeout(showQuestion(questions), 1000);

 function displayCheque(isQuit, winner){
     if(isQuit){
         //i+=1;
         console.log(i);
         if(i  == 0){
            alert("Better Luck Next Time");
            //document.getElementById("MillioniareQuiz").style.display = "none";
            //document.getElementById("Home").style.display = "block";
            //window.location.reload(true);
            pollCancel1.style.display = "block";
            pollCancel2.style.display = "none"
        fiftyCancel1.style.display = "block";
        fiftyCancel2.style.display = "block";

        askComputerCancel1.style.display = "block";
        askComputerCancel2.style.display = "block";        
        changeCancel1.style.display = "block";
        changeCancel2.style.display = "block";
            document.getElementById("retry").style.display = "block";
            return;
        }
        else{
            document.getElementById("cash").innerHTML = rupeesArray[--i].innerHTML;

        }
     }
    if(!isQuit && i  <= 5){
        setTimeout(function(){
            pollCancel1.style.display = "block";
            pollCancel2.style.display = "block";        fiftyCancel1.style.display  = "block";
            fiftyCancel1.style.display  = "block";
        fiftyCancel2.style.display = "block";
        askComputerCancel1.style.display = "block";
        askComputerCancel2.style.display = "block";

        changeCancel1.style.display = "block";
        changeCancel2.style.display = "block";
        alert("Better Luck Next Time");
        document.getElementById("retry").style.display = "block";
        }, 1000)
    }
    else if(winner){
        document.getElementById("cash").innerHTML = "7 Crores";

    }
    else{
        setTimeout(function(){
            document.getElementById("MillioniareQuiz").style.display = "none";
            document.getElementById("ChequePrize").style.display = "block";
            if(!isQuit && i  > 5 && i <9){
                document.getElementById("cash").innerHTML = "10 Thousand";
            }
            else if(!isQuit && i >= 9){
                document.getElementById("cash").innerHTML = "3.2 Lakhs";
            }
        }, 1000);

        
        //document.getElementById("cash").innerHTML = rupeesArray[--i].innerHTML;
    }

}

function disableOptions(){
    option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;
        
}

function enableOptions(){
    option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        
}

 function isCorrect(isCorrectAnswer){
    isAnswered = true;
    if(questions[i][5] == 1){
        document.getElementById("label1").style.background = "green";
    }
    else if(questions[i][5] == 2){
        document.getElementById("label2").style.background = "green";
    }
    else if(questions[i][5] == 3){
        document.getElementById("label3").style.background = "green";
    }
    else if(questions[i][5] == 4){
        document.getElementById("label4").style.background = "green";
    }
    if(isCorrectAnswer){
        changeBackgroundOfAmount(isAnswered);
        playSound("Correct Answer.mp4");
    }
    questionNumber += 1;
    i += 1;
    timer.innerHTML = 0;
    timerIsOver = true;
 }

 function isWrong(option){
    playSound("Wrong Answer.mp4");
     if(option == 1){
        document.getElementById("label1").style.background = "red";
     }
     else if(option == 2){
        document.getElementById("label2").style.background = "red";
     }
     else if(option == 3){
        document.getElementById("label3").style.background = "red";
     }
     else if(option == 4){
        document.getElementById("label4").style.background = "red";
     }
     changeBackgroundOfAmount(isAnswered);

     isCorrect(false);
     
 }
//changeBackgroundOfAmount(i, rupeesArray);
 function changeBackgroundOfAmount(isAnswered){
     //console.log(isAnswered);
    if(isAnswered == false){
        rupeesArray[i].style.background = "red";
    }
    else if(isAnswered){
        rupeesArray[i].style.background = "green";
    }
    else{
        rupeesArray[i].style.background = "orange";
    }
 }

 

function setTimer(){
    if(i <= 4){
        timer.innerHTML = 30;
    }
    else if(i <= 9){
        timer.innerHTML = 45;
    }
    else{
        timer.innerHTML = 60;
    }
    startTimer();
}

function startTimer(){
    //do{
    if(!stopTimer && timer.innerHTML != 0){
        enableOptions();
        playSound("Timer.mp4");
        let decreaseTime = Number(timer.innerHTML);
        decreaseTime-=1;
        timer.innerHTML = decreaseTime;
        setTimeout(function time(){startTimer()}, 1000);
    }
    else if(timer.innerHTML == 0){
        disableOptions();
        document.getElementById("audiencePoll").style.disabled = true;
        document.getElementById("fiftyFifty").style.disabled = true;
        document.getElementById("askTheComputer").style.disabled = true;
        document.getElementById("changeTheQuestion").style.disabled = true;
        //displayCheque(false);

        if(!timerIsOver){
            displayCheque(false);
        }
    }

    
    
//}while(!stopTimer || timer.innerHTML != 0);
}

document.getElementById("fiftyFifty").onclick = function()
 {
        let wrongAnswers = questions[i][6] - 1;
        options[wrongAnswers].innerHTML = "";
        
        wrongAnswers = questions[i][7] - 1;
        options[wrongAnswers].innerHTML = "";

        document.getElementById("fiftyFifty").disabled = true;
        fiftyCancel1.style.display  = "block";
        fiftyCancel2.style.display  = "block";

 };

document.getElementById("askTheComputer").onclick = function(){
        //alert("The answer is option " + questions[i][5]);
        document.getElementById("AudiencePoll").style.display = "none";
        document.getElementById("AskTheExpert").style.display = "block";

        document.getElementById("kbcIcon").style.display = "none";
        if(questions[i][5] == 1){
            document.getElementById("askTheAnswer").innerHTML = "A";
        }
        else if(questions[i][5] == 2){
            document.getElementById("askTheAnswer").innerHTML = "B";
        }
        else if(questions[i][5] == 3){
            document.getElementById("askTheAnswer").innerHTML = "C";
        }
        else if(questions[i][5] == 4){
            document.getElementById("askTheAnswer").innerHTML = "D";
        }
        document.getElementById("askTheComputer").disabled = true;
        askComputerCancel1.style.display = "block";
        askComputerCancel2.style.display = "block";
        setTimeout(function(){
            document.getElementById("AskTheExpert").style.display = "none";
            document.getElementById("kbcIcon").style.display = "block";
    
        }, 5000)
};

/*document.getElementById("audiencePoll").onclick = function(){
    if(questions[i][5] == 1){
        alert("The Audience Poll Voting is as follows:    A: 70%   B: 20%   C: 10%   D: 0%");
    }
    else if(questions[i][5] == 2){
        alert("The Audience Poll Voting is as follows:    A: 30%   B: 50%   C: 10%   D: 10%");
    }
    else if(questions[i][5] == 3){
        alert("The Audience Poll Voting is as follows:    A: 20%   B: 30%   C: 40%   D: 10%");
    }if(questions[i][5] == 4){
        alert("The Audience Poll Voting is as follows:    A: 14%   B: 4%   C: 2%   D: 80%");
    }
    document.getElementById("audiencePoll").disabled = true;

};*/

document.getElementById("audiencePoll").onclick = function(){
    playSound("Audience Poll.mp4"); 
    document.getElementById("AskTheExpert").style.display = "none";
    document.getElementById("AudiencePoll").style.display = "block";
    document.getElementById("kbcIcon").style.display = "none";
    if(questions[i][5] == 1){
        document.getElementById("pollA").style.height = "40%";
        document.getElementById("pollB").style.height = "15%";
        document.getElementById("pollC").style.height = "35%";
        document.getElementById("pollD").style.height = "10%";

    }
    else if(questions[i][5] == 2){
        document.getElementById("pollA").style.height = "15%";
        document.getElementById("pollB").style.height = "40%";
        document.getElementById("pollC").style.height = "10%";
        document.getElementById("pollD").style.height = "35%";

    }
    else if(questions[i][5] == 3){
        document.getElementById("pollA").style.height = "10%";
        document.getElementById("pollB").style.height = "35%";
        document.getElementById("pollC").style.height = "40%";
        document.getElementById("pollD").style.height = "15%";

    }
    else if(questions[i][5] == 4){
        document.getElementById("pollA").style.height = "35%";
        document.getElementById("pollB").style.height = "10%";
        document.getElementById("pollC").style.height = "15%";
        document.getElementById("pollD").style.height = "40%";

    }

    document.getElementById("percentA").innerHTML = document.getElementById("pollA").style.height;
    document.getElementById("percentB").innerHTML = document.getElementById("pollB").style.height;
    document.getElementById("percentC").innerHTML = document.getElementById("pollC").style.height;
    document.getElementById("percentD").innerHTML = document.getElementById("pollD").style.height;
    document.getElementById("audiencePoll").disabled = true;
    pollCancel1.style.display = "block";        
    pollCancel2.style.display = "block";        
    setTimeout(function(){
        document.getElementById("AudiencePoll").style.display = "none";
        document.getElementById("kbcIcon").style.display = "block";
        document.getElementById("audiencePoll").style.bottom = 0;
    }, 5000)

};

document.getElementById("changeTheQuestion").onclick = function(){
    //isCorrect();
    timerIsOver = true;

    timer.innerHTML = 0;

    isChangedQuestion = true;
    disableOptions();
    setTimeout(function(){
    //    isCorrect();
    document.getElementById("label1").style.background = "rgba(72, 22, 129, 0.984);";
    document.getElementById("label2").style.background = "rgba(72, 22, 129, 0.984);";
    document.getElementById("label3").style.background = "rgba(72, 22, 129, 0.984);";
    document.getElementById("label4").style.background = "rgba(72, 22, 129, 0.984);";

    

    if(first){
    changeBackgroundOfAmount();
    }

        timerIsOver = false;
        questionBox.innerHTML = questionNumber + ". " + changeQuestion[0];
        option1.innerHTML = changeQuestion[1];
        option2.innerHTML = changeQuestion[2];
        option3.innerHTML = changeQuestion[3];
        option4.innerHTML = changeQuestion[4];
        isAnswered = false;
    
    setTimer();
    }, 1000)
    document.getElementById("changeTheQuestion").disabled = true;
    changeCancel1.style.display = "block";
    changeCancel2.style.display = "block";
};

document.getElementById("quit").onclick = function(){
    timer.innerHTML = 0;
    disableOptions(true);
    //isCorrect(false);
    displayCheque(true);
    console.log(i);
    //alert("You Won ₹" + rupeesArray[i].innerHTML);

}

document.getElementById("Play").onclick = function(){
    document.getElementById("Home").style.display = "none";
    document.getElementById("MillioniareQuiz").style.display = "block";
    showQuestion(questions);
}

/*document.getElementById("save").onclick = function(){
    document.getElementById("ChequePrize").style.display = "none";
    document.getElementById("Home").style.display = "block";
}*/