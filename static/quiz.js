const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
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

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    
    
    
    
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    
    if (userAnswers[0] == 1) {
        return window.location.assign("/relaxing");
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

  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    let i = 0;
    const questionIndex = i++;
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

     

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;


};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        userAnswers.push(selectedAnswer);
        
        
        const classToApply =
        selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        
       
        

  selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
     

      getNewQuestion();
    }, 200);
  });
  
  
  
  
  
  
});






        
        
        
startGame();