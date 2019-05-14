import Renderer from './lib/Renderer';

class QuizDisplay extends Renderer {
    _generateIntro() {
        return 
        `<div>
            Welcome to the Quiz!
        </div>
        <div>
            <button class="start-game">Start</button>
        </div>`
    }

    _generateAskQuestion(question) {
        const answer = question.map(answer => {
                    return `<input type ="radio" id ="${index}" name="answer" value="#${answer}/>
                    <label for"${id}>${answer}</label>`
                }).join(''); 
        
        return `
                <div>
                    <p>${question.text}</p>
                    <form>
                    ${answers}
                        <div>
                            <input type="submit"/>
                    </form>
                </div>
        `
    }
    /**
    * This function must return an HTML string
    */
    template() {
      // if quiz is inactive and no questions are asked yet, then
      // we're at the intro state of app
      if (!this.model.active && this.model.askedQuestions.length === 0) {
        return this._generateIntro;
      }

      const question = this.model.getCurrentQuestion();

      if (this.model.active && (!question.userAnswer)) {
        return this._generateAskQuestion(question);}

        return '<div> Default Quiz Display</div>`
      }


      
    }
  
    /**
    * This function must return an object
    */
    getEvents() {
      return {
        'click .start-game': 'handleStartGame',
        'submit form': `handleSubmitAnswer`
      };
    }
  
    /**
    * All event handler functions should call model methods, and end with
    * model.update()
    */ 
    handleStart() {
      this.model.startGame();
      this.model.update();
    }

    handleSubmitAnswer(event) {
        event.preventDefault();
        event.target.answer.value
    }

    //call model onto the question 
  }

  export default QuizDisplay;