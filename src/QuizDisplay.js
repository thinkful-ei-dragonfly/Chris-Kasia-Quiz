import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {

  getEvents() {
    return {
      'click .start-game': 'handleStartGame',
      'submit form': `handleSubmitAnswer`
    };
  }

  handleStartGame() {
    this.model.startGame();
  }

  handleSubmitAnswer(event) {
      event.preventDefault();
      this.model.submitAnswer(event);
      this._generateContinueScreen();
  }



    _generateIntro() {
      return  `<div>
        <p>Welcome to the Quiz!</p>
        <p><button class="start-game">Start</button></p>
        </div>`
      
    }



    _generateAskQuestion() {
        const currentAnswers = this.model.currentQuestion().allAnswers.map((answer, index) => {
                    return `<input type ="radio" name="answer" id="${index}" value="${answer}"/>
                    <label for="${index}">${answer}</label>`
                }).join(''); 
        return `
                <div>
                    <p>${this.model.asked[0].text}</p>
                    <form id="submit-form">
                    ${currentAnswers}
                    <div>
                    <input type="submit"/>
                    </div>
                    </form>
                </div>
        `
    }
    /**
    * This function must return an HTML string
    */
    template() {
      let html;
      const question = this.model.currentQuestion();
      if (this.model.asked.length === 0) {
        html = this._generateIntro();
        console.log('intro')
      } else if (this.model.active && (!question.submittedAnswer)) {
        html = this._generateAskQuestion(question);
      } else  {
        html = this._generateContinueScreen(question);
      }
      return html;
    };

    _generateContinueScreen() {
        let current = this.model.currentQuestion().submittedAnswer;
        let correct = this.model.currentQuestion().correctAnswer;
        let answerResponse = '';
        if (current === correct) {
            answerResponse = `<p>You got it! The correct answer was ${correct}</p>`;
        } else {
            answerResponse = `<p><Sorry that's incorrect. You answered ${current}. The correct answer was ${correct}/p>`;
        }
        console.log(answerResponse);
        return `
                <div>
                    <p>${this.model.asked[0].text}</p>
                    ${answerResponse}
                </div>
        `
    }

}

  export default QuizDisplay;