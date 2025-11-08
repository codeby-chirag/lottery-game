import './App.css'
import Lottery from './Lottery'
import { sum } from './helper';


function App() {

  let winCondition = (ticket) => {
    return sum(ticket) === 15;  //Win if the sum of digit is 15
    
    // return ticket.every((num) => num === ticket[0]);
    // return ticket[0] === 0;
  }

  let winCondition2 = (ticket) => {
    return ticket.every((num) => num === ticket[0]);  //Win if all the digits are as same as first digit like 5 5 5
  }

  let winCondition3 = (ticket) => {
    return ticket[0] === 0; //Win if the first digit of the number is 0
  }

  return (
    <div className="app-container">

      <Lottery n = {3}  winCondition = {winCondition}/>

    </div>
  )
}

export default App
