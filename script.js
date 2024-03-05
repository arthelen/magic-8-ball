 /* 
    SCRIPT.JS

    This is where you'll complete the SkillBuilder. Look at the Markdown tab (in the same pane as the console) for detailed README instuctions!
*/

/* - Just a note, I checked my code within the console for all 3 functions and it said they were all good, but I am only getting "maybe" replies. I tried to fix it but could not quite figure it out -- my apologies! UPDATE: I just found the video posted on Canvas after this module showing how an instructor would complete this and fixed my mistake. I commented out what I originally had when I submitted it on time, but fixed it now! But again I did originally submit this before the deadline! */

let positiveAnswers = [
  "As I see it, yes",
  "It is certain",
  "It is decidedly so",
  "Yes",
  "Yes, definitely"
];

let negativeAnswers = [
  "My reply is no",
  "My sources say no",
  "There is no way",
  "No",
  "Absolutely not!"
];

let maybeAnswers = [
  "Ask again later",
  "Better to not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Reply hazy try again"
];

const NO_QUESTION_WARNING = "You need to ask a question!";

function chooseRandomAnswerType() {
	// Part 1: Your code here 👇
  let randomNumber = getRandomNumber(0, 2);
  if (randomNumber === 0) {
    return "positive";
  } else if (randomNumber === 1) {
    return "negative";
  } else {
    return "maybe";
  }
}

// chooseRandomAnswerTypeTest();

function chooseRandomAnswer(answerType) {
	// Part 2: Your code here 👇
  let randomIndex = getRandomNumber(0, 4);
  if (answerType === "positive") {
    return positiveAnswers[randomIndex];
  } else if (answerType === "negative") {
    return negativeAnswers[randomIndex];
  } else {
    return maybeAnswers[randomIndex];
  }
}

// chooseRandomAnswerTest();

let answerElement = document.getElementById("answer");
function onAnswerRequested() {
  // Part 3: Your code here 👇
  if (getQuestionText() === "") {
    supplyAnswer(NO_QUESTION_WARNING);
  } else {
    // chooseRandomAnswerType();
    // supplyAnswer(chooseRandomAnswer());
    let type = chooseRandomAnswerType();
    let answer = chooseRandomAnswer(type);
    supplyAnswer(answer);
  }
}

// onAnswerRequestedTest();

/* LEVEL UP - describe how it works below!
  Describe here!
  - Not sure if this counts for the level up/bonus points since the rubric on Canvas has a different level up but here are the explanations just in case it does count! (Also because I honestly could not figure out how to do the level up given on Canvas :( )

  - function chooseRandomAnswerType()
  This function first generates a random number between 0 and 2, and depending on what it gets, the answer the user gets will be one of the prompts from either the positive, negative, or maybe answer array. If the generator gets 0 it will be a positive answer, 1 a negative answer, and 2 a maybe answer.

  - function chooseRandomAnswer(answerType)
  This function first also generates a random number, this time with a min of 0 and max of 4 since there are a total of 5 prompts per answer array. It then takes the variable from the first function and uses that to determine what exact prompt the user gets from the determined array (positive, negative, or maybe). Then when it determines what array was chosen using the if else statements, it uses the number received from the generator as an index for the specific array and chooses whatever prompt is at that index.

  - function onAnswerRequested()
  Lastly, this function uses a single if else statement to determine if the user has inputted a question or not. If the text in the box is null/empty, or "", the code will run the message to tell the user to ask a question with the constant that was supplied for this assignment. However if it detects text in the box, then the code will call the above functions and then supply the answer to the user!
*/