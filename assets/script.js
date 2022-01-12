var button = document.querySelector(".quiz_info__btn");
var quizInfo = document.querySelector(".quiz_info");
var quiz = document.querySelector(".quiz");
var answers_container = document.querySelector(".answers__container");
var check = document.querySelectorAll(".answers__container__answer");
var question_number = document.querySelector("h3");
var quiz_question = document.querySelector("h2");
var image = document.querySelector(".quiz__img");
var resultDescription = document.querySelector(".quiz__results-description");
let currentQuestion = 0;
let correctAnswers = 0;

var questions = [
  {
    question: "Which Hogwarts class has a different teacher every year?",
    answers: [
      { text: "Potions", correct: false },
      { text: "Defence Against The Dark Arts", correct: true },
      { text: "Herbology", correct: false },
      { text: "Flying", correct: false },
    ],
  },
  {
    question: "Who was Hermione’s date at the Yule Ball in The Goblet of Fire?",
    answers: [
      { text: "Harry Potter", correct: false },
      { text: "Cedric Diggory", correct: false },
      { text: "Victor Krum", correct: true },
      { text: "Neville Longbottom", correct: false },
    ],
  },
  {
    question: "Where is Azkaban located?",
    answers: [
      { text: "Past the Forbidden Forest, turn right", correct: false },
      { text: "In a dark corner across the earth", correct: false },
      { text: "The North Sea", correct: true },
      { text: "Diagon Alley", correct: false },
    ],
  },
  {
    question: "How did Harry and Ron get to Hogwarts in Chamber of Secrets?",
    answers: [
      { text: "The flying Ford Anglia", correct: true },
      { text: "Hogwarts Express", correct: false },
      { text: "Nimbus 2000", correct: false },
      { text: "The Knight Bus", correct: false },
    ],
  },
  {
    question: "What is Tom Riddle’s middle name?",
    answers: [
      { text: "Bilius", correct: false },
      { text: "Marvolo", correct: true },
      { text: "Percival", correct: false },
      { text: "Voldemort", correct: false },
    ],
  },
  {
    question: "Where can Hogwarts students visit from their third year?",
    answers: [
      { text: "Godric’s Hollow", correct: false },
      { text: "Hogsmeade", correct: true },
      { text: "Spinner’s End", correct: false },
      { text: "Gringotts", correct: false },
    ],
  },
  {
    question: "Who do we find out is Harry's godfather in Prisoner of Azkaban?",
    answers: [
      { text: "Tom Riddle", correct: false },
      { text: "Severus Snape", correct: false },
      { text: "Albus Dumbledore", correct: false },
      { text: "Sirius Black", correct: true },
    ],
  },
  {
    question: "What colour are Dobby's eyes?",
    answers: [
      { text: "Blue", correct: false },
      { text: "Brown", correct: false },
      { text: "Black", correct: false },
      { text: "Green", correct: true },
    ],
  },
  {
    question: "What shape birthmark does Dumbledore have?",
    answers: [
      { text: "A phoenix", correct: false },
      { text: "A map of the London Underground", correct: true },
      { text: "The key to Hogwarts", correct: false },
      { text: "A perfect heart", correct: false },
    ],
  },
  {
    question:
      "Which of these is a Potterwatch Radio alter-ego in the Deathly Hallows?",
    answers: [
      { text: "Lupin", correct: false },
      { text: "Rapier", correct: true },
      { text: "Pansy", correct: false },
      { text: "Rolanda", correct: false },
    ],
  },
  {
    question: "Which Horcrux was the first one to be destroyed?",
    answers: [
      { text: "Marvolo Gaunt’s ring", correct: false },
      { text: "Tom Riddle’s diary", correct: true },
      { text: "Nagini", correct: false },
      { text: "Helga Hufflepuff’s Cup", correct: false },
    ],
  },
  {
    question: "What is the number of Harry's vault at Gringotts?",
    answers: [
      { text: "687", correct: true },
      { text: "492", correct: false },
      { text: "384", correct: false },
      { text: "296", correct: false },
    ],
  },
];

button.addEventListener("click", () => {
  quizInfo.style.display = "none";
  button.style.display = "none";
  quiz.style.display = "block";
  renderNextQuestion(currentQuestion);
});
var clearQuestion = () => {
  quiz_question.textContent = "";
  answers_container.innerHTML = "";
};
var renderNextQuestion = (i) => {
  question_number.textContent = `Question ${i + 1}/12`;
  image.src = `img/${i}.jpg`;
  quiz_question.textContent = questions[i].question;

  //!!!!!
  questions[i].answers.forEach((answer) => {
    var answer_text = document.createElement("p");
    answer_text.classList.add("answers__container__answer");
    answer_text.textContent = answer.text;
    if (answer.correct) {
      answer_text.dataset.correct = answer.correct;
    }
    answers_container.append(answer_text);
  });
  //!!!!!
  currentQuestion++;
  document.querySelectorAll(".answers__container__answer").forEach((answer) =>
    answer.addEventListener("click", (e) => {
      if (e.target.dataset.correct) correctAnswers++;
      clearQuestion();
      if (currentQuestion < questions.length)
        renderNextQuestion(currentQuestion);
      if (
        document.querySelector(".answers__container").childElementCount === 0
      ) {
        question_number.style.display = "none";
        image.src = "img/end.png";
        image.style.height = "50vh";
        // image.style.width = 'auto';
        quiz_question.textContent = `Correct answers: ${correctAnswers}`;
        correctAnswers <= 7
          ? (resultDescription.textContent =
              "That wasn't very Hogwarts of you...Anything from the trolley, dear? Yep, a well-needed weekend binge-watch please. Time to brush up on your knowledge!")
          : (resultDescription.textContent =
              "You're a wizard, Harry! Butterbeer's on you, because you're actually pretty clued up. Snape would be proud.");
      }
    })
  );
};
