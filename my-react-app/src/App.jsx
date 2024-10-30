import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './card.jsx'
// import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'
import './App.css'
import ToDoList from './ToDOList.jsx'
import DigitalClock from './DigitalClock.jsx'
import StopWatch from './StopWatch.jsx'
// import DiceRoller from './DiceRoller.jsx'


function App() {
  return(
    <>
    <Header/>
    <DigitalClock />
    <Food favFood="Cheesecakes" isSugarPerson={true} />
    <StopWatch />
    <Card />
    <ColorPicker />
    <ToDoList />
    <Footer/>
    </>
  );
}

export default App
