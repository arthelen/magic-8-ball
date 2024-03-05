# Ask the Magic 8-Ball SkillBuilder 🎱

## Contents
- Introduction
- Starter Code
- Deliverable
- Extra Help (If Needed)
- Level Up! (Extra Credit)

## Introduction
Welcome to the *Ask the Magic 8-Ball* SkillBuilder! 

If you hit Repl's `Run` button, you'll see that your senior engineer has set up all the UI elements for this virtual Magic 8-Ball.  Your task is to complete three functions in `script.js` that build upon eachother to implement the final user experience, which is:

When the user types a question into the input box and clicks the 8-ball, it should display a random answer from one of three answer categories: "positive", "negative", or "maybe". If the user forgot to type a question, then the 8-ball should display a reminder instead of an answer: "You need to ask a question!".

## Starter Code
Start by skimming over the `<section>` and `<input>` tags in the `index.html` file.


Now take a look at the top of `script.js`. There are three arrays that correspond to our answer categories of "positive", "negative", and "maybe". Each array holds five answer strings (but you can add more if you'd like). 

Just below the arrays, you'll see a variable called `NO_QUESTION_WARNING`. This stores a string we can display to the user if they don't enter any question text. **DO NOT CHANGE THESE VARIABLES OR THE TESTS MAY FAIL.**

In `provided.js` there are 3 helper functions you can use to interact with the page and complete this project. Since all of the functions defined in the provided file are usable in `script.js`, **you won't have to add or change anything in `provided.js`.**

**PRO-TIP:** Try running each of the below functions from the console to fully understand them before you start coding.

1) `getRandomNumber(min, max)`: This function accepts the arguments `min` and `max` (Numbers) and returns a randomly generated number in between the supplied min and max (inclusive).
Try calling `getRandomNumber(0, 4)` in the console a few times to see how it works.

2)  `getQuestionText()`: This function simply returns what the user typed into the question input box.
Type something into the input on the page then try calling `getQuestionText()` in the console to see how it works.
    
3) `supplyAnswer(answerText)`: This function accepts a single argument `answerText` and shows that answer to the user.
Try calling `supplyAnswer("Ask again later")` in the console to see how it works.

<hr>

## Deliverable
Below are the requirements for the 3 functions in `script.js` you'll need to implement to complete the user experience. 

The first two functions you write will serve as tools to use in the last function that will be called when the user clicks the 8-ball. Each function comes with a test that will give you hints as you develop and help you verify that your code is correct. Feel free to use the console to help you test your functions as well.


1) `chooseRandomAnswerType()`: 
This function should randomly return either "positive", "negative", or "maybe".  Again, you can use `getRandomNumber()` to randomly select one of the three possibilities.

**TEST:** `chooseRandomAnswerTypeTest()`
<hr>

2) `chooseRandomAnswer(answerType)`: 
The parameter `answerType` will be a string that is either "positive", "negative", or "maybe". Based on this parameter, you should return a random answer from the corresponding answer array.

**TEST:** `chooseRandomAnswerTest()`
<hr>

3) `onAnswerRequested()`: 
This function is called when the 8-ball is clicked. If no question is asked, then you should show the answer "You need to ask a question!" (use the `NO_QUESTION_WARNING` variable provided). Otherwise, supply a random answer to the user using conditional logic and the functions you have at your disposal: `getQuestionText()`, `chooseRandomAnswerType()`, `chooseRandomAnswer()`, and `supplyAnswer()`.

**TEST:** `onAnswerRequestedTest()`
<hr>

## Extra Help (If Needed)

You have everything you need to get started and complete this SkillBuilder! The most challenging part is going to be decomposing to break down this problem into parts (what to do first, second, third). You should try this on your own but, if you're still having trouble, try clicking HINTS.md for some extra help.

## Level Up! (Extra Credit)

Want to enhance your game? Refactor your Javascript logic in a way that will prevent the same answer from appearing twice in a row. Use your decomposition and discovery skills to figure out how. 

When you're done coding, use the LEVEL UP comment at the bottom of `script.js` to describe your feature to your grader for extra credit!