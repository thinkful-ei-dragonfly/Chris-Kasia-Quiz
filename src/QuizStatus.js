import Renderer from './lib/Renderer';


class QuizStatus extends Renderer{
   template() {
    const score = this.model.score;
    const higthScore = this.model.higthscore
    const current = this.model.asked.length;
    const total = this.model.asked.length + this.model.unasked.length;

           return `<div>
                   <p> Score: ${score}</p>
                   <p> Progress: ${current === 0 ? 'inactive': `${current} of ${total}` }</p>
                   </div>`
   }
}

export default QuizStatus;