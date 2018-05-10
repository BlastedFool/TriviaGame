$(document).ready(function () {

    
    var options = [
        {
            question: "What year was the Atari 2600 released?", 
            choice: ["1980", "1975", "1977", "1978"],
            answer: 2,
            photo: "assets/images/pupusas.jpg"
         },
         {
             question: "What year was the NES released?", 
            choice: ["1980", "1981", "1982", "1983"],
            answer: 3,
            photo: "assets/images/mtdew.gif"
         }, 
         {
             question: "What is Nintendo's most popular selling console", 
            choice: ["Nintendo DS", "Nintendo Switch", "Nintendo 3Ds", "Nintendo Wii" ],
            answer: 0,
            photo: "assets/images/coffee.gif"
        }, 
        {
            question: "Which is not an ingredient in a Harvey Wallbanger cocktail?", 
            choice: ["Orange Juice", "Vodka", "Sour Mix", "Galliano" ],
            answer: 2,
            photo: "assets/images/harvey.jpg"
        }, 
        {
            question: "How many items are there in a Bakers' Dozen?", 
            choice: ["12", "6", "24", "13" ],
            answer: 3,
            photo: "assets/images/dozen.jpg"
        }, 
        {
            question: "What is the most widely eaten fish in the world?", 
            choice: ["Tilapia", "Herring", "Sardine", "Tuna" ],
            answer: 1,
            photo: "assets/images/herring.jpg"
        }, 
        {
            question: "Which fruit does not ripen once it has been picked?", 
            choice: ["Banana", "Lemon", "Mango", "Apple" ],
            answer: 1,
            photo: "assets/images/lemon.gif"
        }, 
        {
            question: "Which fruit contains the most protein per 100 calories?", 
            choice: ["Guava", "Avocado", "Banana", "Blackberries" ],
            answer: 0,
            photo: "assets/images/guava.gif"
        }];
    
        //declaring global counters and variables
    
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 20;
    var intervalId;
    var userGuess ="";
    var running = false;
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];
    
    
    
    