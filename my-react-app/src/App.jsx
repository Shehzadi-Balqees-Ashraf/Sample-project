import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './card.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'
import './App.css'
import ToDoList from './ToDOList.jsx'
import DigitalClock from './DigitalClock.jsx'


function App() {
  return(
    <>
    <Header/>
    <Food favFood="Cheesecakes" isSugarPerson={true} />
    <DigitalClock />
    <Card />
    <Counter />
    <ColorPicker />
    <ToDoList />
    <Footer/>
    </>
  );
}

export default App
