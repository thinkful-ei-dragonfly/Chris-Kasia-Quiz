import Question from './Question';
import TriviaApi from './TriviaApi';
import Model from './lib/Model';

class Quiz extends Model {

  static DEFAULT_QUIZ_LENGTH = 5;

  constructor() {
    super();
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.active = false;
    this.score = 0;
    this.scoreHistory = [];
    this.api = new TriviaApi();
    // TASK: Add more props here per the exercise

  }

  // Example method:
  startGame() {
    this.asked = [];
    this.unasked = [];
    this.score = 0;
    this.active = true;
    this.api.baseFetchMethod(Quiz.DEFAULT_QUIZ_LENGTH).then(res => {
        let array = res.results;
        array.forEach(element => {
        this.unasked.push(new Question(element));
    });
    this.nextQuestion();
    this.update();
  })
  .catch(error => {
    console.log(error);
  });
};

currentQuestion() {
  return this.asked[0];
}

submitAnswer(event) {
  console.log(this.currentQuestion());
  let answer = event.target.answer.value;
  this.currentQuestion().submittedAnswer = answer;
  this.checkAnswer(answer);
  console.log(this.score);
  this.update();
}



checkAnswer(answer) {
  if (!answer) {
    return null
  }
  console.log(answer);
  if (answer.submittedAnswer === this.correctAnswer) {
    this.scoreChange();
  } 
}


nextQuestion(answer) {
  const current = this.currentQuestion();
  if (current && current.submittedAnswer === null) {
    throw new Error('must answer the question')
  }
  if (this.unasked.length === 0) {
    this.active = false;
    this.scoreHistory.unshift(this.score);
  }
  this.asked.unshift(this.unasked.pop());
  this.update();
  return this.asked[0];
}

scoreChange(answer) {
  this.score = this.score + 1;
}

changeScoreHistory() {
  if (this.unasked.length === 0) {
    this.scoreHistory.push
  }
}

} 

export default Quiz;
