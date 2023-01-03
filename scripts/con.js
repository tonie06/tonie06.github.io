function generateQuestion() {
        // Choose two random numbers
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);

        // Choose a random operator
        const operators = ["+", "-", "*", "/"];
        const operator = operators[Math.floor(Math.random() * operators.length)];

        // Generate the question text
        const question = `${num1} ${operator} ${num2}`;

        // Display the question
        const mathQuestionElement = document.getElementById("math-question");
        mathQuestionElement.textContent = `Please solve the following math problem: ${question}`;

        // Return the correct answer
        switch (operator) {
          case "+":
            return num1 + num2;
          case "-":
            return num1 - num2;
          case "*":
            return num1 * num2;
          case "/":
            return num1 / num2;
        }
      }

      // Generate the initial math question
      const correctAnswer = generateQuestion();

      // Validate the form submission
      const form = document.querySelector("form");
      form.addEventListener("submit", event => {
        // Get the user's answer
        const answer = document.getElementById("answer").value;

        // Check if the answer is correct
        if (answer == correctAnswer) {
          // The answer is correct, allow the form submission to proceed
          return true;
        } else {
          // The answer is incorrect, prevent the form submission and show an error message
          event.preventDefault();
          alert("Incorrect answer. Form was not submitted");

          // Generate a new math question
          correctAnswer = generateQuestion();
        }
      });