import Question from './Question';
import TriviaApi from './TriviaApi';

class Quiz {

  static DEFAULT_QUIZ_LENGTH = 2;

  constructor() {
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.active = false;
    this.score = 0;
    this.scoreHistory = 0;
    // TASK: Add more props here per the exercise

  }

  // Example method:
  startGame() {
    this.active = true;
    const triviaGame = new TriviaApi();
    triviaGame.baseFetchMethod().then(res => {
        let array = res.results;
        array.forEach(element => {
        let question = new Question();
        question.text = element.question;
        question.answers = [element.correct_answer,...element.incorrect_answers]; //this is an array
        question.correctAnswer = element.correct_answer;
        question.playerAnswer = ''; 
        this.unasked.push(question);
    });
  })
  .catch(error => {
    console.log(error);
  });
  console.log(this.unasked);
};

 askQuestions(answer) {
   this.unasked.forEach(question => {
    question.submittedAnswer = answer;
   })
 }


  questionsAsked() {
    this.asked.push(this.unasked.pop());
    console.log(this.asked);
    console.log(this.unasked);
  }

  scoreChange() {
    this.score = this.score + 1;
  }


  endGame() {
    this.active = false;
  }

  
}

export default Quiz;
