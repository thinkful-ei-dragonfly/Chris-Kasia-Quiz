import Question from './Question';

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
  }

  
}

export default Quiz;
