const question = document.getElementById('question'); //return the element whose id is question and set it equal to the variable question
const choices = Array.from(document.getElementsByClassName('choice-text')); //create an array out of the choices, using the choice-text class
//console.log(choices)
const progressText = document.getElementById("progressText"); //return the element whose id is progressText and set it equal to progressText
const progressBarFull = document.getElementById("progressBarFull"); //return the element whose id is progressBarFull and set it equal to progressBarFull

let currentQuestion = {}; //empty array
let acceptingAnswers = false; 
//let score = 0;  
let questionCounter = 0;
let availableQuestions = [];
let userAnswers = [];

let questions = [ 
    {
        question: 'What Type of Travel Experience Would you Like?',
        choice1: 'Relaxing',
        choice2: 'Adventure',
        choice3: 'Sight Seeing',
        choice4: 'I do not know, I just need to get away!',
    },

    {
        question:"What is your Timeframe?",
        choice1: "3-5 days",
        choice2: "5-9 days",
        choice3: "9-14 days",
        choice4: "14+ days",
    },

      {
        question: "What type of Weather do you Prefer?",
        choice1: "Summer",
        choice2: "Spring",
        choice3: "Fall",
        choice4: "Winter",

    },

    {
        question: "What Time of Year are you Traveling?",
        choice1: "December-March",
        choice2: "March-June",
        choice3: "June-september",
        choice4:"September-November",
    },
];

const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    //score = 0;
    availableQuestions = [...questions]; //set availableQuestions equal to the properties of the questions array
    getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    
    if (userAnswers[0] == 1) {
        return window.location.href("/TravelTime/static/relaxing.html");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 1 ) {
        return window.location.assign("/B");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 2 ) {
        return window.location.assign("/C");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 3 ) {
        return window.location.assign("/D");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 4 ) {
        return window.location.assign("/E");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 1 ) {
        return window.location.assign("/F");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 2 ) {
        return window.location.assign("/G");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 3 ) {
        return window.location.assign("/H");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 4 ) {
        return window.location.assign("/I");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 1) {
        return window.location.assign("/J");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 2) {
        return window.location.assign("/K");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 3) {
        return window.location.assign("/K");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 4) {
        return window.location.assign("/M");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 1) {
        return window.location.assign("/N");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 2) {
        return window.location.assign("/O");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 3) {
        return window.location.assign("/P");
    }
    
    else if (userAnswers[0] == 2 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 4) {
        return window.location.assign("/Q");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 1) {
        return window.location.assign("/R");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 2) {
        return window.location.assign("/S");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 3) {
        return window.location.assign("/T");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 4) {
        return window.location.assign("/U");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 1) {
        return window.location.assign("/V");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 2) {
        return window.location.assign("/W");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 3) {
        return window.location.assign("/X");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 1 || userAnswers[1] == 2) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 4) {
        return window.location.assign("/Y");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 1) {
        return window.location.assign("/Z");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 2) {
        return window.location.assign("/A1");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 3) {
        return window.location.assign("/A1");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 1 || userAnswers[2] == 2) && userAnswers[3] == 4) {
        return window.location.assign("/A3");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 1) {
        return window.location.assign("/A4");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 2) {
        return window.location.assign("/A5");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 3) {
        return window.location.assign("/A5");
    }
    
    else if (userAnswers[0] == 3 && (userAnswers[1] == 3 || userAnswers[1] == 4) && (userAnswers[2] == 3 || userAnswers[2] == 4) && userAnswers[3] == 4) {
        return window.location.assign("/A5");
    }
    
    if (userAnswers[0] == 4) {
        return window.location.assign("/relaxing");
    }
    
    else {
      return window.location.assign("/end");
    }
  }
  questionCounter++; //increment questionCounter by 1
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`; //this will show "Question x/4", x being the current question number
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`; //set the width of the progress bar to be the percentage of questions answered

    //let i = 0;
    const questionIndex = 0
   //console.log(questions)
   // console.log(availableQuestions)
    currentQuestion = availableQuestions[questionIndex]; //set currentQuestion equal to the actual current question along with the choices
   // console.log(currentQuestion)
    question.innerText = currentQuestion.question; // set the inner text of question equal to the question in currentQuestion

  choices.forEach(choice => { //for each "choice" in the choices array
    const number = choice.dataset["number"]; //get the choice number (without all the html code)
    choice.innerText = currentQuestion["choice" + number];   //set the inner text of choice to the question
  });

  availableQuestions.splice(questionIndex, 1); //replaces 0th element with 1, removing the already answered questions
  acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target; //return the object that the event (in this case, click) was called upon, in other words return the choice that was selected
        const selectedAnswer = selectedChoice.dataset['number']; //return the number of the selectedChoice
        //console.log(selectedAnswer)
        userAnswers.push(selectedAnswer); //add the answer into an array called userAnswers
        
        const classToApply =  'selected'; 
        
       
        

  selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
     

      getNewQuestion();
    }, 200);
  }); 
});
        
startGame();