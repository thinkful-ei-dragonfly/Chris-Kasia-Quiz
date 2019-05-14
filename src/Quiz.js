import Question from './Question';
import TriviaApi from './TriviaApi';
import Model from './lib/Model';

class Quiz extends Model {

  static DEFAULT_QUIZ_LENGTH = 2;

  constructor() {
    super();
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.active = false;
    this.score = 0;
    this.scoreHistory = [];
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
        question.submittedAnswer = ''; 
        this.unasked.push(question);
    });
    this.asked.unshift(this.unasked.shift());
    console.log(this.unasked);
    console.log(this.asked);
    this.currentQuestion();
    this.askedQuestion();
    this.update();
  })
  .catch(error => {
    console.log(error);
  });
};

currentQuestion() {
  return console.log(this.asked[this.asked.length-1]);
}

nextQuestion() {
  if (this.active && this.unasked.length > 0) {
    this.asked.push(this.unasked.pop());
    this.update();
}
}

scoreChange() {
  this.score = this.score + 1;
}

changeScoreHistory() {
  if (this.unasked.length === 0) {
    this.scoreHistory.push
  }
}


endGame() {
    this.active = false;
}

  
} 

export default Quiz;
