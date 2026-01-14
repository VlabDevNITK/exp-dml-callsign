// Don't touch the below code
let currentQuestion;
(function () {
  function buildQuiz() {
    let html;
    fetch("experiment/posttest.json").then((res) =>
      res.json().then((data) => {
        data.questions.forEach((d, i) => {
          currentQuestion = d;

          html = `<div class="question"> ${i + 1}.  ${
            currentQuestion.question
          }</div> <div class="answers">`;

          for (letter in currentQuestion.answers) {
            html += `<label ><input class="question${
              i + 1
            }" type="radio" name="question${
              i + 1
            }" value="${letter}">${letter} : ${
              currentQuestion.answers[letter]
            }</label>`;
          }

          html += `</div>`;
          quizContainer.insertAdjacentHTML("beforeend", html);
        });
      })
    );
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;
    let currentQuestion = [];

    fetch("experiment/pretest.json").then((res) =>
      res.json().then((data) => {
        data.questions.forEach((d, i) => {
          currentQuestion.push(d);

          const answerContainer = answerContainers[i];

          answerContainer.querySelectorAll("input").forEach((input) => {
            if (input.checked) {
              if (input.value === d.correctAnswer) {
                numCorrect++;

                answerContainers[i].style.fontWeight = "bold";
                answerContainers[i].style.color = "green";
                return;
              } else if (input.value !== d.correctAnswer) {
                answerContainers[i].style.fontWeight = "normal";
                answerContainers[i].style.color = "red";
              }
            }
          });

          resultsContainer.innerHTML = `${numCorrect} out of ${currentQuestion.length}`;
        });
      })
    );
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  buildQuiz();
  submitButton.addEventListener("click", showResults);
})();
