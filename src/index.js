import $ from 'jquery';
import Quiz from './Quiz';

import TriviaApi from './TriviaApi';

function main() {
  const q = new Quiz();
  // const quizDisplay = new QuizDisplay(quiz, '.display');
  // const quizStatus = new QuizStatus(quiz, '.status');
  window.q = q;  // adding `q` to `window`, so you can examine it in console
  q.startGame();
}

$(main);

