import $ from 'jquery';
import './index.css';
import Quiz from './Quiz';
import QuizDisplay from './QuizDisplay'
import QuizStatus from './QuizStatus'


function main() {
  const q = new Quiz();
  const quizDisplay = new QuizDisplay(q, '.display');
  const quizStatus = new QuizStatus(q, '.status');
  window.q = q;  // adding `q` to `window`, so you can examine it in console
  // q.startGame();
}

$(main);

