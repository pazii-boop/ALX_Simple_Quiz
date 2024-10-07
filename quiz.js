// Step 1: Define the checkAnswer function
function checkAnswer() {
  // Step 2: Declare the correct answer
  let correctAnswer = "4";

  // Step 3: Retrieve the user's selected answer
  let userAnswer = document.querySelector('input[name="quiz"]:checked');

  // Step 4: Check if an answer was selected
  if (!userAnswer) {
    document.getElementById("feedback").textContent =
      "Please select an answer.";
    return;
  }

  // Get the value of the selected radio button
  userAnswer = userAnswer.value;

  // Step 5: Compare the user's answer with the correct answer
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent =
      "That's incorrect. Try again!";
  }
}

// Step 6: Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
