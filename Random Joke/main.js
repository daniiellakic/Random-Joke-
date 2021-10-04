// Getting button with querySelector()
var whenClick = document.querySelector(".display-btn");

// Creating the array that stores the text strings
var jokeText = [

        "Talk is cheap? Have you ever talked to a lawyer?",
        "Two artists had an art contest. It ended in a draw!",
        "What is Forrest Gump's password? 1Forrest1.",
        "I have many jokes about rich kids—sadly none of them work.",
        "How do trees get online? They just log on!",
        "Where does the sheep get his hair cut? The baa baa shop!",
        "What did 0 say to 8? Nice belt!",
        "Why did the orange stop? It ran out of juice!",
        "Why do French people eat snails? They don't like fast food!"
    ];

//Function to get joke - randomly selecting a joke from array 
function randomJoke() {

        var randomNumber = Math.floor(Math.random() * (jokeText.length));
        document.getElementById('display-joke').innerHTML = jokeText[randomNumber];

    }

// addEventListtener to call getJoke function when button click
whenClick.addEventListener("click", randomJoke);










