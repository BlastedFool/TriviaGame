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
            choice: ["Nintendo DS", "Nintendo Switch", "Nintendo 3Ds", "Nintendo Wii" ],
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
            photo: "assets/images/teris.jpg"
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
    
    
    
   