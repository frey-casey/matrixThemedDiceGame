"use strict"
let points =0;
const holdButton = document.querySelector('#hold-button');
const playerPoints= document.querySelector('#playerPoints');
const turnCount= document.querySelector('#turnCount');
const rollDiceButton = document.querySelector('#roll-dice-button');
const reRollButton = document.querySelector('#reRoll')
const score = document.getElementById("score");
const form = document.getElementById("dice-form");

let currentScore = 0;
let diceArray = [];
let selectedDice = [];
let originalRollResults = [];
let sortedDice = [];
let rollResults = [];
let pPoints = 0;
let turnCounter = 0;
let initialRoll = true; 

let die1 = document.querySelector('#die1');
let die2 = document.querySelector('#die2');
let die3 = document.querySelector('#die3');
let die4 = document.querySelector('#die4');
let die5 = document.querySelector('#die5');
let die6 = document.querySelector('#die6');
let reroll = true;
const dieImages = [
    "die 1-1.png",
    "die 1-2.png",
    "die 1-3.png",
    "die 1-4.png",
    "die 1-5.png",
    "die 1-6.png"
];

var firstRoll;
let diceRoll;



rollDiceButton.addEventListener('click', () => {
    const generateAndUpdate = function(){
        let diceRoll = [];
        for (let i = 0; i < 6; i++) {
            diceRoll.push(Math.floor(Math.random() * 6) + 1);
        }
        die1.src = dieImages[diceRoll[0]-1];
        die2.src = dieImages[diceRoll[1]-1];
        die3.src = dieImages[diceRoll[2]-1];
        die4.src = dieImages[diceRoll[3]-1];
        die5.src = dieImages[diceRoll[4]-1];
        die6.src = dieImages[diceRoll[5]-1];
        initialRoll=false;
        return diceRoll;
    }
    if (initialRoll === true) {
        rollResults = generateAndUpdate();
        console.log('casey', rollResults);

        initialRoll = false;
    }else {
        alert("You can only roll once per turn!");
    }
    let reRoll = true;

    function initCondition(){
        currentScore = 0;
        pPoints = 0;
        initialRoll = true;
        turnCounter=0;
        score.innerHTML = `Score:`
        playerPoints.innerHTML = `Player Points:`
        turnCount.innerHTML = `Turn Number: 0`
        }
        const newGameButton = document.querySelector('#newGame');
      
        newGameButton.addEventListener('click', ()=>{
        
          initCondition()
        })
      
     
    holdButton.addEventListener('click', () => {
        if (!initialRoll) {
            pPoints += currentScore;
            playerPoints.textContent = `Player Points: ${pPoints}`;
            initialRoll = true;
            currentScore = 0;
            turnCounter++;
            turnCount.textContent = `Turn Number: ${turnCounter}`;

            const checkboxes = form.querySelectorAll('input[type="checkbox"]');
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = false;
            }
        }
        function winning(){
            if(pPoints >= 10000){
                turnCount.textContent = `You finished in ${turnCounter} turns!`;
        
            }
        }
         winning();
    });
    

    

function reRollSelectedDice(selectedDice, rollResults) {
    for (let i = 0; i < selectedDice.length; i++) {
        let index = selectedDice[i];
        rollResults[index] = Math.floor(Math.random() * 6) + 1;
    }
    originalRollResults = [...rollResults]; //update originalRollResults
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const selectedDice = [];
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedDice.push(parseInt(checkboxes[i].value));
        }
    }
    if (reRoll === true) {
        reRollSelectedDice(selectedDice, rollResults);

        die1.src = dieImages[rollResults[0]-1];
        die2.src = dieImages[rollResults[1]-1];
        die3.src = dieImages[rollResults[2]-1];
        die4.src = dieImages[rollResults[3]-1];
        die5.src = dieImages[rollResults[4]-1];
        die6.src = dieImages[rollResults[5]-1];
        console.log(rollResults);
        reRoll = false;
    } else {
        
    } 
});
});


        

        
    holdButton.addEventListener('click', () => {
    if (!initialRoll) {
    pPoints += currentScore;
    playerPoints.textContent = `Player Points: ${pPoints}`;
    initialRoll = true;

    currentScore = 0;
    turnCounter++;
    turnCount.textContent = `Turn Number: ${turnCounter}`;
        
    }       calculatePoints(rollResults),
    scoreIt();
    });

  const scoreIt = function(){    currentScore = calculatePoints(rollResults)
    score.innerHTML =`Score: ${currentScore}`};
  



  function calculatePoints(rollResults){ "use strict"
  sortedDice = rollResults.sort((a, b) => a - b)
    points = 0;    


    
    if (sortedDice.join(',') === [1,1,1,1,1,1].join(',')){points=5000};
    if (sortedDice.join(',') === [1,1,1,1,1,2].join(',')){points=2000};
    if (sortedDice.join(',') === [1,1,1,1,1,3].join(',')){points=2000};
    if (sortedDice.join(',') === [1,1,1,1,1,4].join(',')){points=2000};
    if (sortedDice.join(',') === [1,1,1,1,1,5].join(',')){points=2050};
    if (sortedDice.join(',') === [1,1,1,1,1,6].join(',')){points=2000};
    if (sortedDice.join(',') === [1,1,1,1,2,2].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,1,2,3].join(',')){points=1000};
    if (sortedDice.join(',') === [1,1,1,1,2,4].join(',')){points=1000};
    if (sortedDice.join(',') === [1,1,1,1,2,5].join(',')){points=1050};
    if (sortedDice.join(',') === [1,1,1,1,2,6].join(',')){points=1000};
    if (sortedDice.join(',') === [1,1,1,1,3,3].join(',')){points=1450};
    if (sortedDice.join(',') === [1,1,1,1,3,4].join(',')){points=1000};
    if (sortedDice.join(',') === [1,1,1,1,3,5].join(',')){points=1050};
    if (sortedDice.join(',') === [1,1,1,1,3,6].join(',')){points=1000};
    if (sortedDice.join(',') === [1,1,1,1,4,4].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,1,4,5].join(',')){points=1050};
    if (sortedDice.join(',') === [1,1,1,1,4,6].join(',')){points=1000};
    if (sortedDice.join(',') === [1,1,1,1,5,5].join(',')){points=1500};
    if (sortedDice.join(',') === [1,1,1,1,5,6].join(',')){points=1050};
    if (sortedDice.join(',') === [1,1,1,1,6,6].join(',')){points=1450};
    if (sortedDice.join(',') === [1,1,1,2,2,2].join(',')){points=2500};
    if (sortedDice.join(',') === [1,1,1,2,2,3].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,2,2,4].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,2,2,5].join(',')){points=1300};
    if (sortedDice.join(',') === [1,1,1,2,2,6].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,2,3,3].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,2,3,4].join(',')){points=1000};
    if (sortedDice.join(',') === [1,1,1,2,3,5].join(',')){points=1050};
    if (sortedDice.join(',') === [1,1,1,2,3,6].join(',')){points=1000};
    if (sortedDice.join(',') === [1,1,1,2,4,4].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,2,4,5].join(',')){points=1050};
    if (sortedDice.join(',') === [1,1,1,2,4,6].join(',')){points=1000};
    if (sortedDice.join(',') === [1,1,1,2,5,5].join(',')){points=1350};
    if (sortedDice.join(',') === [1,1,1,2,5,6].join(',')){points=1050};
    if (sortedDice.join(',') === [1,1,1,2,6,6].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,3,3,3].join(',')){points=2500};
    if (sortedDice.join(',') === [1,1,1,3,3,4].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,3,3,5].join(',')){points=1300};
    if (sortedDice.join(',') === [1,1,1,3,3,6].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,3,4,4].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,3,4,5].join(',')){points=1050};
    if (sortedDice.join(',') === [1,1,1,3,4,6].join(',')){points=1000};
    if (sortedDice.join(',') === [1,1,1,3,5,5].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,3,5,6].join(',')){points=1050};
    if (sortedDice.join(',') === [1,1,1,3,6,6].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,4,4,4].join(',')){points=2500};
    if (sortedDice.join(',') === [1,1,1,4,4,5].join(',')){points=1300};
    if (sortedDice.join(',') === [1,1,1,4,4,6].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,4,5,5].join(',')){points=1350};
    if (sortedDice.join(',') === [1,1,1,4,5,6].join(',')){points=1050};
    if (sortedDice.join(',') === [1,1,1,4,6,6].join(',')){points=1250};
    if (sortedDice.join(',') === [1,1,1,5,5,5].join(',')){points=2500};
    if (sortedDice.join(',') === [1,1,1,5,5,6].join(',')){points=1350};
    if (sortedDice.join(',') === [1,1,1,5,6,6].join(',')){points=1300};
    if (sortedDice.join(',') === [1,1,1,6,6,6].join(',')){points=2500};
    if (sortedDice.join(',') === [1,1,2,2,2,2].join(',')){points=1200};
    if (sortedDice.join(',') === [1,1,2,2,2,3].join(',')){points=400};
    if (sortedDice.join(',') === [1,1,2,2,2,4].join(',')){points=400};
    if (sortedDice.join(',') === [1,1,2,2,2,5].join(',')){points=500};
    if (sortedDice.join(',') === [1,1,2,2,2,6].join(',')){points=400};
    if (sortedDice.join(',') === [1,1,2,2,3,3].join(',')){points=1500};
    if (sortedDice.join(',') === [1,1,2,2,3,4].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,2,2,3,5].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,2,2,3,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,2,2,4,4].join(',')){points=1500};
    if (sortedDice.join(',') === [1,1,2,2,4,5].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,2,2,4,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,2,2,5,5].join(',')){points=1500};
    if (sortedDice.join(',') === [1,1,2,2,5,6].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,2,2,6,6].join(',')){points=1500};
    if (sortedDice.join(',') === [1,1,2,3,3,3].join(',')){points=550};
    if (sortedDice.join(',') === [1,1,2,3,3,4].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,2,3,3,5].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,2,3,3,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,2,3,4,4].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,2,3,4,5].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,2,3,4,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,2,3,5,5].join(',')){points=300};
    if (sortedDice.join(',') === [1,1,2,3,5,6].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,2,3,6,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,2,4,4,4].join(',')){points=650};
    if (sortedDice.join(',') === [1,1,2,4,4,5].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,2,4,4,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,2,4,5,5].join(',')){points=300};
    if (sortedDice.join(',') === [1,1,2,4,5,6].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,2,4,6,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,2,5,5,5].join(',')){points=750};
    if (sortedDice.join(',') === [1,1,2,5,5,6].join(',')){points=300};
    if (sortedDice.join(',') === [1,1,2,5,6,6].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,2,6,6,6].join(',')){points=850};
    if (sortedDice.join(',') === [1,1,3,3,3,3].join(',')){points=1450};
    if (sortedDice.join(',') === [1,1,3,3,3,4].join(',')){points=550};
    if (sortedDice.join(',') === [1,1,3,3,3,5].join(',')){points=550};
    if (sortedDice.join(',') === [1,1,3,3,3,6].join(',')){points=550};
    if (sortedDice.join(',') === [1,1,3,3,4,4].join(',')){points=1500};
    if (sortedDice.join(',') === [1,1,3,3,4,5].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,3,3,4,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,3,3,5,5].join(',')){points=1500};
    if (sortedDice.join(',') === [1,1,3,3,5,6].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,3,3,6,6].join(',')){points=1500};
    if (sortedDice.join(',') === [1,1,3,4,4,4].join(',')){points=650};
    if (sortedDice.join(',') === [1,1,3,4,4,5].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,3,4,4,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,3,4,5,5].join(',')){points=300};
    if (sortedDice.join(',') === [1,1,3,4,5,6].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,3,4,6,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,1,3,5,5,5].join(',')){points=750};
    if (sortedDice.join(',') === [1,1,3,5,5,6].join(',')){points=300};
    if (sortedDice.join(',') === [1,1,3,5,6,6].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,3,6,6,6].join(',')){points=850};
    if (sortedDice.join(',') === [1,1,4,4,4,4].join(',')){points=1200};
    if (sortedDice.join(',') === [1,1,4,4,4,5].join(',')){points=700};
    if (sortedDice.join(',') === [1,1,4,4,4,6].join(',')){points=650};
    if (sortedDice.join(',') === [1,1,4,4,5,5].join(',')){points=1500};
    if (sortedDice.join(',') === [1,1,4,4,5,6].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,4,4,6,6].join(',')){points=1500};
    if (sortedDice.join(',') === [1,1,4,5,5,5].join(',')){points=750};
    if (sortedDice.join(',') === [1,1,4,5,5,6].join(',')){points=300};
    if (sortedDice.join(',') === [1,1,4,5,6,6].join(',')){points=250};
    if (sortedDice.join(',') === [1,1,4,6,6,6].join(',')){points=850};
    if (sortedDice.join(',') === [1,1,5,5,5,5].join(',')){points=1450};
    if (sortedDice.join(',') === [1,1,5,5,5,6].join(',')){points=750};
    if (sortedDice.join(',') === [1,1,5,5,6,6].join(',')){points=1500};
    if (sortedDice.join(',') === [1,1,5,6,6,6].join(',')){points=850};
    if (sortedDice.join(',') === [1,1,6,6,6,6].join(',')){points=1450};
    if (sortedDice.join(',') === [1,2,2,2,2,2].join(',')){points=2000};
    if (sortedDice.join(',') === [1,2,2,2,2,3].join(',')){points=1100};
    if (sortedDice.join(',') === [1,2,2,2,2,4].join(',')){points=1100};
    if (sortedDice.join(',') === [1,2,2,2,2,5].join(',')){points=1150};
    if (sortedDice.join(',') === [1,2,2,2,2,6].join(',')){points=1100};
    if (sortedDice.join(',') === [1,2,2,2,3,3].join(',')){points=300};
    if (sortedDice.join(',') === [1,2,2,2,3,4].join(',')){points=300};
    if (sortedDice.join(',') === [1,2,2,2,3,5].join(',')){points=350};
    if (sortedDice.join(',') === [1,2,2,2,3,6].join(',')){points=300};
    if (sortedDice.join(',') === [1,2,2,2,4,4].join(',')){points=650};
    if (sortedDice.join(',') === [1,2,2,2,4,5].join(',')){points=350};
    if (sortedDice.join(',') === [1,2,2,2,4,6].join(',')){points=300};
    if (sortedDice.join(',') === [1,2,2,2,5,5].join(',')){points=550};
    if (sortedDice.join(',') === [1,2,2,2,5,6].join(',')){points=350};
    if (sortedDice.join(',') === [1,2,2,2,6,6].join(',')){points=650};
    if (sortedDice.join(',') === [1,2,2,3,3,3].join(',')){points=650};
    if (sortedDice.join(',') === [1,2,2,3,3,4].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,2,3,3,5].join(',')){points=150};
    if (sortedDice.join(',') === [1,2,2,3,3,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,2,3,4,4].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,2,3,4,5].join(',')){points=150};
    if (sortedDice.join(',') === [1,2,2,3,4,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,2,3,5,5].join(',')){points=200};
    if (sortedDice.join(',') === [1,2,2,3,5,6].join(',')){points=150};
    if (sortedDice.join(',') === [1,2,2,3,6,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,2,4,4,4].join(',')){points=750};
    if (sortedDice.join(',') === [1,2,2,4,4,5].join(',')){points=150};
    if (sortedDice.join(',') === [1,2,2,4,4,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,2,4,5,5].join(',')){points=200};
    if (sortedDice.join(',') === [1,2,2,4,5,6].join(',')){points=150};
    if (sortedDice.join(',') === [1,2,2,4,6,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,2,5,5,5].join(',')){points=850};
    if (sortedDice.join(',') === [1,2,2,5,5,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,2,2,5,6,6].join(',')){points=150};
    if (sortedDice.join(',') === [1,2,2,6,6,6].join(',')){points=950};
    if (sortedDice.join(',') === [1,2,3,3,3,3].join(',')){points=1100};
    if (sortedDice.join(',') === [1,2,3,3,3,4].join(',')){points=400};
    if (sortedDice.join(',') === [1,2,3,3,3,5].join(',')){points=400};
    if (sortedDice.join(',') === [1,2,3,3,3,6].join(',')){points=400};
    if (sortedDice.join(',') === [1,2,3,3,4,4].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,3,3,4,5].join(',')){points=150};
    if (sortedDice.join(',') === [1,2,3,3,4,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,3,3,5,5].join(',')){points=200};
    if (sortedDice.join(',') === [1,2,3,3,5,6].join(',')){points=150};
    if (sortedDice.join(',') === [1,2,3,3,6,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,3,4,4,4].join(',')){points=500};
    if (sortedDice.join(',') === [1,2,3,4,4,5].join(',')){points=150};
    if (sortedDice.join(',') === [1,2,3,4,4,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,3,4,5,5].join(',')){points=200};
    if (sortedDice.join(',') === [1,2,3,4,5,6].join(',')){points=3000};
    if (sortedDice.join(',') === [1,2,3,4,6,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,3,5,5,5].join(',')){points=600};
    if (sortedDice.join(',') === [1,2,3,5,5,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,2,3,5,6,6].join(',')){points=150};
    if (sortedDice.join(',') === [1,2,3,6,6,6].join(',')){points=700};
    if (sortedDice.join(',') === [1,2,4,4,4,4].join(',')){points=1100};
    if (sortedDice.join(',') === [1,2,4,4,4,5].join(',')){points=550};
    if (sortedDice.join(',') === [1,2,4,4,4,6].join(',')){points=500};
    if (sortedDice.join(',') === [1,2,4,4,5,5].join(',')){points=200};
    if (sortedDice.join(',') === [1,2,4,4,5,6].join(',')){points=150};
    if (sortedDice.join(',') === [1,2,4,4,6,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,2,4,5,5,5].join(',')){points=600};
    if (sortedDice.join(',') === [1,2,4,5,5,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,2,4,5,6,6].join(',')){points=150};
    if (sortedDice.join(',') === [1,2,4,6,6,6].join(',')){points=700};
    if (sortedDice.join(',') === [1,2,5,5,5,5].join(',')){points=1100};
    if (sortedDice.join(',') === [1,2,5,5,5,6].join(',')){points=600};
    if (sortedDice.join(',') === [1,2,5,5,6,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,2,5,6,6,6].join(',')){points=750};
    if (sortedDice.join(',') === [1,2,6,6,6,6].join(',')){points=1100};
    if (sortedDice.join(',') === [2,2,3,4,5,5].join(',')){points=100};
    if (sortedDice.join(',') === [2,2,3,4,5,6].join(',')){points=50};
    if (sortedDice.join(',') === [2,2,3,3,4,5].join(',')){points=50};
    if (sortedDice.join(',') === [2,3,3,3,4,5].join(',')){points=350};
    if (sortedDice.join(',') === [2,3,3,4,4,5].join(',')){points=50};
    if (sortedDice.join(',') === [2,3,3,4,5,5].join(',')){points=100};
    if (sortedDice.join(',') === [2,3,3,4,5,6].join(',')){points=50};
    if (sortedDice.join(',') === [2,2,3,4,4,5].join(',')){points=50};
    if (sortedDice.join(',') === [2,3,4,4,4,5].join(',')){points=450};
    if (sortedDice.join(',') === [2,3,4,4,5,5].join(',')){points=100};
    if (sortedDice.join(',') === [2,3,4,4,5,6].join(',')){points=50};
    if (sortedDice.join(',') === [2,3,4,5,5,5].join(',')){points=500};
    if (sortedDice.join(',') === [2,3,4,5,5,6].join(',')){points=100};
    if (sortedDice.join(',') === [2,3,4,5,6,6].join(',')){points=50};
    if (sortedDice.join(',') === [2,2,2,3,4,6].join(',')){points=200};
    if (sortedDice.join(',') === [2,2,3,3,4,6].join(',')){points=0};
    if (sortedDice.join(',') === [2,2,3,4,4,6].join(',')){points=0};
    if (sortedDice.join(',') === [2,2,3,4,6,6].join(',')){points=0};
    if (sortedDice.join(',') === [2,3,3,3,4,6].join(',')){points=300};
    if (sortedDice.join(',') === [2,3,3,4,4,6].join(',')){points=0};
    if (sortedDice.join(',') === [2,3,3,4,6,6].join(',')){points=0};
    if (sortedDice.join(',') === [2,3,4,4,4,6].join(',')){points=400};
    if (sortedDice.join(',') === [2,3,4,4,6,6].join(',')){points=0};
    if (sortedDice.join(',') === [2,3,4,6,6,6].join(',')){points=600};
    if (sortedDice.join(',') === [2,2,2,2,4,4].join(',')){points=1000};
    if (sortedDice.join(',') === [2,2,2,3,4,4].join(',')){points=550};
    if (sortedDice.join(',') === [2,2,2,4,4,4].join(',')){points=2500};
    if (sortedDice.join(',') === [2,2,2,4,4,5].join(',')){points=550};
    if (sortedDice.join(',') === [2,2,2,4,4,6].join(',')){points=550};
    if (sortedDice.join(',') === [2,2,3,3,4,4].join(',')){points=1500};
    if (sortedDice.join(',') === [2,2,3,4,4,4].join(',')){points=650};
    if (sortedDice.join(',') === [2,2,4,4,4,4].join(',')){points=1450};
    if (sortedDice.join(',') === [2,2,4,4,4,5].join(',')){points=700};
    if (sortedDice.join(',') === [2,2,4,4,4,6].join(',')){points=650};
    if (sortedDice.join(',') === [2,2,4,4,5,5].join(',')){points=1500};
    if (sortedDice.join(',') === [2,2,4,4,5,6].join(',')){points=50};
    if (sortedDice.join(',') === [2,2,4,4,6,6].join(',')){points=1500};
    if (sortedDice.join(',') === [2,3,3,3,4,4].join(',')){points=550};
    if (sortedDice.join(',') === [2,3,3,4,4,4].join(',')){points=400};
    if (sortedDice.join(',') === [2,3,4,4,4,4].join(',')){points=1000};
    if (sortedDice.join(',') === [2,4,4,4,4,4].join(',')){points=2000};
    if (sortedDice.join(',') === [2,4,4,4,4,5].join(',')){points=1050};
    if (sortedDice.join(',') === [2,4,4,4,4,6].join(',')){points=1000};
    if (sortedDice.join(',') === [2,4,4,4,5,5].join(',')){points=650};
    if (sortedDice.join(',') === [2,4,4,4,5,6].join(',')){points=450};
    if (sortedDice.join(',') === [2,4,4,4,6,6].join(',')){points=650};
    if (sortedDice.join(',') === [2,4,4,5,5,5].join(',')){points=750};
    if (sortedDice.join(',') === [2,4,4,5,5,6].join(',')){points=100};
    if (sortedDice.join(',') === [2,4,4,5,6,6].join(',')){points=50};
    if (sortedDice.join(',') === [2,4,4,6,6,6].join(',')){points=850};
    if (sortedDice.join(',') === [2,2,2,2,4,5].join(',')){points=1050};
    if (sortedDice.join(',') === [2,2,2,3,4,5].join(',')){points=250};
    if (sortedDice.join(',') === [2,2,2,4,5,5].join(',')){points=450};
    if (sortedDice.join(',') === [2,2,2,4,5,6].join(',')){points=250};
    if (sortedDice.join(',') === [2,2,4,5,5,5].join(',')){points=750};
    if (sortedDice.join(',') === [2,2,4,5,5,6].join(',')){points=100};
    if (sortedDice.join(',') === [2,2,4,5,6,6].join(',')){points=50};
    if (sortedDice.join(',') === [2,4,5,5,5,5].join(',')){points=1000};
    if (sortedDice.join(',') === [2,4,5,5,5,6].join(',')){points=500};
    if (sortedDice.join(',') === [2,4,5,5,6,6].join(',')){points=100};
    if (sortedDice.join(',') === [2,4,5,6,6,6].join(',')){points=650};
    if (sortedDice.join(',') === [2,2,2,2,4,6].join(',')){points=1000};
    if (sortedDice.join(',') === [2,2,2,4,6,6].join(',')){points=450};
    if (sortedDice.join(',') === [2,2,4,6,6,6].join(',')){points=850};
    if (sortedDice.join(',') === [2,4,6,6,6,6].join(',')){points=1000};
    if (sortedDice.join(',') === [2,2,2,2,2,5].join(',')){points=2050};
    if (sortedDice.join(',') === [2,2,2,2,3,5].join(',')){points=1050};
    if (sortedDice.join(',') === [2,2,2,2,5,5].join(',')){points=1100};
    if (sortedDice.join(',') === [2,2,2,2,5,6].join(',')){points=1050};
    if (sortedDice.join(',') === [2,2,2,3,3,5].join(',')){points=500};
    if (sortedDice.join(',') === [2,2,2,3,5,5].join(',')){points=450};
    if (sortedDice.join(',') === [2,2,2,3,5,6].join(',')){points=250};
    if (sortedDice.join(',') === [2,2,2,5,5,5].join(',')){points=2500};
    if (sortedDice.join(',') === [2,2,2,5,5,6].join(',')){points=450};
    if (sortedDice.join(',') === [2,2,2,5,6,6].join(',')){points=450};
    if (sortedDice.join(',') === [2,2,3,3,3,5].join(',')){points=550};
    if (sortedDice.join(',') === [2,2,3,3,5,5].join(',')){points=1500};
    if (sortedDice.join(',') === [2,2,3,3,5,6].join(',')){points=50};
    if (sortedDice.join(',') === [2,2,3,5,5,5].join(',')){points=750};
    if (sortedDice.join(',') === [2,2,3,5,5,6].join(',')){points=100};
    if (sortedDice.join(',') === [2,2,3,5,6,6].join(',')){points=50};
    if (sortedDice.join(',') === [2,2,5,5,5,5].join(',')){points=1000};
    if (sortedDice.join(',') === [2,2,5,5,5,6].join(',')){points=750};
    if (sortedDice.join(',') === [2,2,5,5,6,6].join(',')){points=1500};
    if (sortedDice.join(',') === [2,2,5,6,6,6].join(',')){points=900};
    if (sortedDice.join(',') === [2,3,3,3,3,5].join(',')){points=1050};
    if (sortedDice.join(',') === [2,3,3,3,5,5].join(',')){points=550};
    if (sortedDice.join(',') === [2,3,3,3,5,6].join(',')){points=350};
    if (sortedDice.join(',') === [2,3,3,5,5,5].join(',')){points=750};
    if (sortedDice.join(',') === [2,3,3,5,5,6].join(',')){points=100};
    if (sortedDice.join(',') === [2,3,3,5,6,6].join(',')){points=50};
    if (sortedDice.join(',') === [2,3,5,5,5,5].join(',')){points=1000};
    if (sortedDice.join(',') === [2,3,5,5,5,6].join(',')){points=500};
    if (sortedDice.join(',') === [2,3,5,5,6,6].join(',')){points=100};
    if (sortedDice.join(',') === [2,3,5,6,6,6].join(',')){points=650};
    if (sortedDice.join(',') === [2,5,5,5,5,5].join(',')){points=2000};
    if (sortedDice.join(',') === [2,5,5,5,5,6].join(',')){points=1000};
    if (sortedDice.join(',') === [2,5,5,5,6,6].join(',')){points=750};
    if (sortedDice.join(',') === [2,5,5,6,6,6].join(',')){points=850};
    if (sortedDice.join(',') === [2,5,6,6,6,6].join(',')){points=1050};
    if (sortedDice.join(',') === [2,2,2,2,2,6].join(',')){points=2000};
    if (sortedDice.join(',') === [2,2,2,2,3,6].join(',')){points=1000};
    if (sortedDice.join(',') === [2,2,2,2,6,6].join(',')){points=1450};
    if (sortedDice.join(',') === [2,2,2,3,3,6].join(',')){points=450};
    if (sortedDice.join(',') === [2,2,2,3,6,6].join(',')){points=450};
    if (sortedDice.join(',') === [2,2,2,6,6,6].join(',')){points=2500};
    if (sortedDice.join(',') === [2,2,3,3,3,6].join(',')){points=550};
    if (sortedDice.join(',') === [2,2,3,3,6,6].join(',')){points=1500};
    if (sortedDice.join(',') === [2,2,3,6,6,6].join(',')){points=850};
    if (sortedDice.join(',') === [2,2,6,6,6,6].join(',')){points=1450};
    if (sortedDice.join(',') === [2,3,3,3,3,6].join(',')){points=1000};
    if (sortedDice.join(',') === [2,3,3,3,6,6].join(',')){points=550};
    if (sortedDice.join(',') === [2,3,3,6,6,6].join(',')){points=850};
    if (sortedDice.join(',') === [2,3,6,6,6,6].join(',')){points=1000};
    if (sortedDice.join(',') === [2,6,6,6,6,6].join(',')){points=2000};
    if (sortedDice.join(',') === [1,3,3,3,3,3].join(',')){points=2100};
    if (sortedDice.join(',') === [1,3,3,3,3,4].join(',')){points=1100};
    if (sortedDice.join(',') === [1,3,3,3,3,5].join(',')){points=1150};
    if (sortedDice.join(',') === [1,3,3,3,3,6].join(',')){points=1100};
    if (sortedDice.join(',') === [1,3,3,3,4,4].join(',')){points=650};
    if (sortedDice.join(',') === [1,3,3,3,4,5].join(',')){points=450};
    if (sortedDice.join(',') === [1,3,3,3,4,6].join(',')){points=400};
    if (sortedDice.join(',') === [1,3,3,3,5,5].join(',')){points=650};
    if (sortedDice.join(',') === [1,3,3,3,5,6].join(',')){points=450};
    if (sortedDice.join(',') === [1,3,3,3,6,6].join(',')){points=650};
    if (sortedDice.join(',') === [1,3,3,4,4,4].join(',')){points=750};
    if (sortedDice.join(',') === [1,3,3,4,4,5].join(',')){points=150};
    if (sortedDice.join(',') === [1,3,3,4,4,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,3,3,4,5,5].join(',')){points=200};
    if (sortedDice.join(',') === [1,3,3,4,5,6].join(',')){points=150};
    if (sortedDice.join(',') === [1,3,3,4,6,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,3,3,5,5,5].join(',')){points=850};
    if (sortedDice.join(',') === [1,3,3,5,5,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,3,3,5,6,6].join(',')){points=150};
    if (sortedDice.join(',') === [1,3,3,6,6,6].join(',')){points=950};
    if (sortedDice.join(',') === [1,3,4,4,4,4].join(',')){points=1100};
    if (sortedDice.join(',') === [1,3,4,4,4,5].join(',')){points=550};
    if (sortedDice.join(',') === [1,3,4,4,4,6].join(',')){points=500};
    if (sortedDice.join(',') === [1,3,4,4,5,5].join(',')){points=200};
    if (sortedDice.join(',') === [1,3,4,4,5,6].join(',')){points=150};
    if (sortedDice.join(',') === [1,3,4,4,6,6].join(',')){points=100};
    if (sortedDice.join(',') === [1,3,4,5,5,5].join(',')){points=600};
    if (sortedDice.join(',') === [1,3,4,5,5,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,3,4,5,6,6].join(',')){points=150};
    if (sortedDice.join(',') === [1,3,4,6,6,6].join(',')){points=700};
    if (sortedDice.join(',') === [1,3,5,5,5,5].join(',')){points=1100};
    if (sortedDice.join(',') === [1,3,5,5,5,6].join(',')){points=600};
    if (sortedDice.join(',') === [1,3,5,5,6,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,3,5,6,6,6].join(',')){points=750};
    if (sortedDice.join(',') === [1,3,6,6,6,6].join(',')){points=1100};
    if (sortedDice.join(',') === [2,2,2,2,2,3].join(',')){points=2000};
    if (sortedDice.join(',') === [2,2,2,2,3,3].join(',')){points=1450};
    if (sortedDice.join(',') === [2,2,2,2,3,4].join(',')){points=1000};
    if (sortedDice.join(',') === [2,2,2,3,3,3].join(',')){points=2500};
    if (sortedDice.join(',') === [2,2,2,3,3,4].join(',')){points=450};
    if (sortedDice.join(',') === [2,2,3,3,3,3].join(',')){points=1450};
    if (sortedDice.join(',') === [2,2,3,3,3,4].join(',')){points=550};
    if (sortedDice.join(',') === [2,3,3,3,3,3].join(',')){points=2000};
    if (sortedDice.join(',') === [2,3,3,3,3,4].join(',')){points=1000};
    if (sortedDice.join(',') === [3,3,3,3,3,3].join(',')){points=3000};
    if (sortedDice.join(',') === [3,3,3,3,3,4].join(',')){points=2000};
    if (sortedDice.join(',') === [3,3,3,3,3,5].join(',')){points=2050};
    if (sortedDice.join(',') === [3,3,3,3,3,6].join(',')){points=2000};
    if (sortedDice.join(',') === [3,3,3,3,4,4].join(',')){points=1450};
    if (sortedDice.join(',') === [3,3,3,3,4,5].join(',')){points=1050};
    if (sortedDice.join(',') === [3,3,3,3,4,6].join(',')){points=1000};
    if (sortedDice.join(',') === [3,3,3,3,5,5].join(',')){points=1450};
    if (sortedDice.join(',') === [3,3,3,3,5,6].join(',')){points=1050};
    if (sortedDice.join(',') === [3,3,3,3,6,6].join(',')){points=1450};
    if (sortedDice.join(',') === [3,3,3,4,4,4].join(',')){points=2500};
    if (sortedDice.join(',') === [3,3,3,4,4,5].join(',')){points=600};
    if (sortedDice.join(',') === [3,3,3,4,4,6].join(',')){points=550};
    if (sortedDice.join(',') === [3,3,3,4,5,5].join(',')){points=550};
    if (sortedDice.join(',') === [3,3,3,4,5,6].join(',')){points=350};
    if (sortedDice.join(',') === [3,3,3,4,6,6].join(',')){points=550};
    if (sortedDice.join(',') === [3,3,3,5,5,5].join(',')){points=2500};
    if (sortedDice.join(',') === [3,3,3,5,5,6].join(',')){points=550};
    if (sortedDice.join(',') === [3,3,3,5,6,6].join(',')){points=600};
    if (sortedDice.join(',') === [3,3,3,6,6,6].join(',')){points=2500};
    if (sortedDice.join(',') === [3,3,4,4,4,4].join(',')){points=1450};
    if (sortedDice.join(',') === [3,3,4,4,4,5].join(',')){points=700};
    if (sortedDice.join(',') === [3,3,4,4,4,6].join(',')){points=650};
    if (sortedDice.join(',') === [3,3,4,4,5,5].join(',')){points=1500};
    if (sortedDice.join(',') === [3,3,4,4,5,6].join(',')){points=50};
    if (sortedDice.join(',') === [3,3,4,4,6,6].join(',')){points=1500};
    if (sortedDice.join(',') === [3,3,4,5,5,5].join(',')){points=750};
    if (sortedDice.join(',') === [3,3,4,5,5,6].join(',')){points=100};
    if (sortedDice.join(',') === [3,3,4,5,6,6].join(',')){points=50};
    if (sortedDice.join(',') === [3,3,4,6,6,6].join(',')){points=850};
    if (sortedDice.join(',') === [3,3,5,5,5,5].join(',')){points=1450};
    if (sortedDice.join(',') === [3,3,5,5,5,6].join(',')){points=750};
    if (sortedDice.join(',') === [3,3,5,5,6,6].join(',')){points=1500};
    if (sortedDice.join(',') === [3,3,5,6,6,6].join(',')){points=900};
    if (sortedDice.join(',') === [3,3,6,6,6,6].join(',')){points=1450};
    if (sortedDice.join(',') === [3,4,4,4,4,4].join(',')){points=2000};
    if (sortedDice.join(',') === [3,4,4,4,4,5].join(',')){points=1050};
    if (sortedDice.join(',') === [3,4,4,4,4,6].join(',')){points=1000};
    if (sortedDice.join(',') === [3,4,4,4,5,5].join(',')){points=650};
    if (sortedDice.join(',') === [3,4,4,4,5,6].join(',')){points=450};
    if (sortedDice.join(',') === [3,4,4,4,6,6].join(',')){points=650};
    if (sortedDice.join(',') === [3,4,4,5,5,5].join(',')){points=750};
    if (sortedDice.join(',') === [3,4,4,5,5,6].join(',')){points=100};
    if (sortedDice.join(',') === [3,4,4,5,6,6].join(',')){points=50};
    if (sortedDice.join(',') === [3,4,4,6,6,6].join(',')){points=850};
    if (sortedDice.join(',') === [3,4,5,5,5,5].join(',')){points=1000};
    if (sortedDice.join(',') === [3,4,5,5,5,6].join(',')){points=500};
    if (sortedDice.join(',') === [3,4,5,5,6,6].join(',')){points=100};
    if (sortedDice.join(',') === [3,4,5,6,6,6].join(',')){points=650};
    if (sortedDice.join(',') === [3,4,6,6,6,6].join(',')){points=1000};
    if (sortedDice.join(',') === [3,5,5,5,5,5].join(',')){points=2000};
    if (sortedDice.join(',') === [3,5,5,5,5,6].join(',')){points=2000};
    if (sortedDice.join(',') === [3,5,5,5,6,6].join(',')){points=750};
    if (sortedDice.join(',') === [3,5,5,6,6,6].join(',')){points=850};
    if (sortedDice.join(',') === [3,5,6,6,6,6].join(',')){points=1050};
    if (sortedDice.join(',') === [3,6,6,6,6,6].join(',')){points=2000};
    if (sortedDice.join(',') === [1,4,4,4,4,4].join(',')){points=2100};
    if (sortedDice.join(',') === [1,4,4,4,4,5].join(',')){points=1050};
    if (sortedDice.join(',') === [1,4,4,4,4,6].join(',')){points=1100};
    if (sortedDice.join(',') === [1,4,4,4,5,5].join(',')){points=750};
    if (sortedDice.join(',') === [1,4,4,4,5,6].join(',')){points=550};
    if (sortedDice.join(',') === [1,4,4,4,6,6].join(',')){points=650};
    if (sortedDice.join(',') === [1,4,4,5,5,5].join(',')){points=850};
    if (sortedDice.join(',') === [1,4,4,5,5,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,4,4,5,6,6].join(',')){points=150};
    if (sortedDice.join(',') === [1,4,4,6,6,6].join(',')){points=950};
    if (sortedDice.join(',') === [1,4,5,5,5,5].join(',')){points=1100};
    if (sortedDice.join(',') === [1,4,5,5,5,6].join(',')){points=600};
    if (sortedDice.join(',') === [1,4,5,5,6,6].join(',')){points=200};
    if (sortedDice.join(',') === [1,4,5,6,6,6].join(',')){points=750};
    if (sortedDice.join(',') === [1,4,6,6,6,6].join(',')){points=1100};
    if (sortedDice.join(',') === [2,2,2,2,2,4].join(',')){points=2000};
    if (sortedDice.join(',') === [4,4,4,4,4,4].join(',')){points=3000};
    if (sortedDice.join(',') === [4,4,4,4,4,5].join(',')){points=2050};
    if (sortedDice.join(',') === [4,4,4,4,4,6].join(',')){points=2000};
    if (sortedDice.join(',') === [4,4,4,4,5,5].join(',')){points=1450};
    if (sortedDice.join(',') === [4,4,4,4,5,6].join(',')){points=1050};
    if (sortedDice.join(',') === [4,4,4,4,6,6].join(',')){points=1450};
    if (sortedDice.join(',') === [4,4,4,5,5,5].join(',')){points=2500};
    if (sortedDice.join(',') === [4,4,4,5,5,6].join(',')){points=650};
    if (sortedDice.join(',') === [4,4,4,5,6,6].join(',')){points=700};
    if (sortedDice.join(',') === [4,4,4,6,6,6].join(',')){points=2500};
     if (sortedDice.join(',') === [4,4,5,5,5,5].join(',')){points=1450};
     if (sortedDice.join(',') === [4,4,5,5,5,6].join(',')){points=750};
     if (sortedDice.join(',') === [4,4,5,5,6,6].join(',')){points=1500};
     if (sortedDice.join(',') === [4,4,5,6,6,6].join(',')){points=900};
     if (sortedDice.join(',') === [4,4,6,6,6,6].join(',')){points=1450};
     if (sortedDice.join(',') === [4,5,5,5,5,5].join(',')){points=2000};
     if (sortedDice.join(',') === [4,5,5,5,5,6].join(',')){points=1000};
     if (sortedDice.join(',') === [4,5,5,5,6,6].join(',')){points=750};
     if (sortedDice.join(',') === [4,5,5,6,6,6].join(',')){points=850};
     if (sortedDice.join(',') === [4,5,6,6,6,6].join(',')){points=1050};
     if (sortedDice.join(',') === [4,6,6,6,6,6].join(',')){points=2000};
     if (sortedDice.join(',') === [1,5,5,5,5,5].join(',')){points=2100};
     if (sortedDice.join(',') === [1,5,5,5,5,6].join(',')){points=1100};
     if (sortedDice.join(',') === [1,5,5,5,6,6].join(',')){points=850};
     if (sortedDice.join(',') === [1,5,5,6,6,6].join(',')){points=950};
     if (sortedDice.join(',') === [1,5,6,6,6,6].join(',')){points=1150};
     if (sortedDice.join(',') === [5,5,5,5,5,5].join(',')){points=3000};
     if (sortedDice.join(',') === [5,5,5,5,5,6].join(',')){points=2000};
     if (sortedDice.join(',') === [5,5,5,5,6,6].join(',')){points=1450};
     if (sortedDice.join(',') === [5,5,5,6,6,6].join(',')){points=2500};
     if (sortedDice.join(',') === [5,5,6,6,6,6].join(',')){points=1450};
     if (sortedDice.join(',') === [5,6,6,6,6,6].join(',')){points=2050};
     if (sortedDice.join(',') === [1,6,6,6,6,6].join(',')){points=2100};
     if (sortedDice.join(',') === [6,6,6,6,6,6].join(',')){points=3000};
    


    return points 
}


const uncheck = function(){


        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    };

//     const matrixContainer = document.querySelector('.matrix-container');

//     setInterval(() => {
//       const letter = document.createElement('span');
//       letter.textContent = String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Generate a random lowercase letter code between 97 and 122
//       matrixContainer.appendChild(letter);
//     }, 100);
            
//     const matrixContainer1 = document.querySelector('.matrix-container1');

//     setInterval(() => {
//       const letter = document.createElement('span');
//       letter.textContent = String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Generate a random lowercase letter code between 97 and 122
//       matrixContainer1.appendChild(letter);
//     }, 100);

//     const randomPercentage = Math.floor(Math.random() * 101); // Generate a random percentage between 0 and 100
// document.documentElement.style.setProperty('--random-percentage', `${randomPercentage}%`);


const length = 3005; // number of letters to generate
let output = "";

for (let i = 0; i < length; i++) {
  const letter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  output += letter + "<br>";
}

// Remove the last <br> tag from the output
output = output.slice(0, -4);

// Use the output string as desired
console.log(output);
