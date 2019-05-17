import Renderer from './lib/Renderer';


class QuizStatus extends Renderer{
   template() {
    const score = this.model.score;
    const scoreHistory = this.model.scoreHistory;
    const current = this.model.asked.length;
    const total = this.model.asked.length + this.model.unasked.length;

           return `<div>
                   <p> High Score: ${scoreHistory}</p>
                   <p> Score: ${score}</p>
                   <p> Progress: ${current === 0 ? 'inactive': `${current} of ${total}` }</p>
                   </div>`
   }
}

export default QuizStatus;