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

  handleSubmitGame()

    _generateIntro() {
      return  `<div>
        <p>Welcome to the Quiz!</p>
        <p><button class="start-game">Start</button></p>
        </div>`
      
    }

    _generateAskQuestion(Questions) {
        const currentAnswer = allAnswers.map(answer => {
                    return `<input type ="radio" id ="${index}" name="answer" value="#${answer}/>
                    <label for"${index}>${answer}</label>`
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
      let html;
      const question = this.model.currentQuestion();
      if (this.model.asked.length === 0) {
        html = this._generateIntro();
        console.log('intro')
      } else if (this.model.active && (!question.userAnswer)) {
        html = this._generateAskQuestion(question);
      }
      return html;
    };


      
    
  
    /**
    * This function must return an object
    */
   
  
    /**
    * All event handler functions should call model methods, and end with
    * model.update()
    */ 
   

    // handleSubmitAnswer(event) {
    //     event.preventDefault();
    //     event.target.answer.value
    // }

    //call model onto the question 
  }

  export default QuizDisplay;