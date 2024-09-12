
import './App.css'
import { Navbar } from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Section } from './components/Section'

function App() {
  
// const nameValue  = "Ganesh Dutt";
// const image  = <img src='https://img.freepik.com/free-photo/happy-excited-tourist-shooting-landmarks_1262-18852.jpg?ga=GA1.1.226300517.1725278774&semt=ais_hybrid'></img>
  return (
   <>
    {/* <h1>{nameValue}</h1>
    <p>{image}</p>
    Hello world!

    <p>Lorem ipsum dolor sit amet.</p>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, pariatur. Doloremque velit deserunt magnam quasi voluptatibus accusamus quidem animi similique. Culpa tempora expedita voluptatem dolor debitis possimus cum nemo perspiciatis?</p> */}

    <Navbar></Navbar>
    <Section/>
   </>
   
  )
}

export default App
