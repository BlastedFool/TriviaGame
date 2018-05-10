$(document).ready(function () {

    
    var options = [
        {
            question: "What year was the Atari 2600 released?", 
            choice: ["1980", "1975", "1977", "1978"],
            answer: 2,
            photo: "assets/images/atari2600.jpg"
         },
         {
             question: "What year was the NES released?", 
            choice: ["1980", "1981", "1982", "1983"],
            answer: 3,
            photo: "assets/images/NES.jpg"
         }, 
         {
             question: "What is Nintendo's most popular selling console", 
            choice: ["Nintendo DS", "Nintendo Switch", "Nintendo 3 DS", "Nintendo Wii" ],
            answer: 0,
            photo: "assets/images/NDS.jpg"
        }, 
        {
            question: "Who is Mario's arch nemesis ?", 
            choice: ["Luigi", "Wario", "Bowser", "Boo"],
            answer: 2,
            photo: "assets/images/bowser.jpg"
        }, 
        {
            question: "What is the best selling videogame of all time?", 
            choice: ["Grand Theft Auto", "Wii Sports", "Minecraft", "Tetris" ],
            answer: 3,
            photo: "assets/images/tetris.jpg"
        }, 
        {
            question: "In the first generation of Pokemon, how many total Pokémon are there?", 
            choice: ["100", "150", "151", "145" ],
            answer: 2,
            photo: "assets/images/ash_mew.gif"
        }, 
        {
            question: "What is Link's Horses Name", 
            choice: ["Zelda", "Epona", "Pony", "Luna" ],
            answer: 1,
            photo: "assets/images/epona.png"
        }, 
        {
            question: "Which company develops the Mega man series?", 
            choice: ["Capcom", "Konami", "Square Enix", "Blizzard" ],
            answer: 0,
            photo: "assets/images/megaman.jpg"
        }];
    
        //declaring global counters and variables
    
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var noAnswer = 0;
    var timer = 15;
    var intervalTimer;
    var userGuess ="";
    var running = false;
    var qCount = options.length;
    var pick;
    var newArray = [];
    var holder = [];
    
     $("#reset").hide();
    //click start button to start game
    $("#start").on("click", function () {
            $("#start").hide();
            displayQuestion();
            runTimer();
            for(var i = 0; i < options.length; i++) {
        holder.push(options[i]);
    }
        })
    //timer start
    function runTimer(){
        if (!running) {
        intervalTimer = setInterval(decrement, 1000); 
        running = true;
        }
    }
    //timer countdown
    function decrement() {
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer --;
    
        //stop timer if reach 0
        if (timer === 0) {
            noAnswer++;
            stop();
            $("#answerblock").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }	
    }
    
    //timer stop
    function stop() {
        running = false;
        clearInterval(intervalTimer);
    }
    //randomly pick question in array if not already shown
    //display question and loop though and display possible answers
    function displayQuestion() {
        //generate random index in array
        index = Math.floor(Math.random()*options.length);
        pick = options[index];
    
        //iterate through answer array and display
        $("#questionblock").html("<h2>" + pick.question + "</h2>");
        for(var i = 0, l=pick.choice.length; i<l; i++) {
            var userChoice = $("<div>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.choice[i]);
            //assign array position to it so can check answer
            userChoice.attr("data-guessvalue", i);
            //push to the answerblock
            $("#answerblock").append(userChoice);
    }
   
    
    //click function to select answer and outcomes
    $(".answerchoice").on("click", function () {
        //grab array position from userGuess
        userGuess = parseInt($(this).attr("data-guessvalue"));
    
        //correct guess or wrong guess outcomes
        if (userGuess === pick.answer) {
            stop();
            correctAnswer++;
            userGuess="";
            $("#answerblock").html("<p>Correct!</p>");
            displaySet();
    
        } else {
            stop();
            wrongAnswer++;
            userGuess="";
            $("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            displaySet();
        }
    })
    }
        
    function displaySet () {
        $("#answerblock").append("<img src=" + pick.photo + ">");
        newArray.push(pick);
        options.splice(index,1);
    
        var hidepicture = setTimeout(function() {
            $("#answerblock").empty();
            timer = 15;
    
        //run the score screen if all questions answered
        if ((wrongAnswer + correctAnswer + noAnswer) === qCount) {
            $("#questionblock").empty();
            $("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
            $("#answerblock").append("<h4> Correct: " + correctAnswer + "</h4>" );
            $("#answerblock").append("<h4> Incorrect: " + wrongAnswer + "</h4>" );
            $("#answerblock").append("<h4> Unanswered: " + noAnswer + "</h4>" );
            $("#reset").show();
            correctAnswer = 0;
            wrongAnswer = 0;
            noAnswer = 0;
    
        } else {
            runTimer();
            displayQuestion();
    
        }
        }, 2000);  
    }
    
    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#answerblock").empty();
        $("#questionblock").empty();
        for(var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        displayQuestion();
    
    })
    })
    
    
   