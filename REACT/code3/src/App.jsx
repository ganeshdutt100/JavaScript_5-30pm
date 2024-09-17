
import './App.css'
// import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Section1 } from './Components/Section1'
// import Section1 from './Components/Section1'
function App() {

  let image1 =  <img src="https://img.freepik.com/free-photo/enthusiastic-long-hairs-woman-looking-up-making-picture-enjoying-amazing-architecture-old-european-city-spring-fall-season-cozy-knitted-red-sweater-sunny-weather-warm-colors_273443-1584.jpg?ga=GA1.1.1872758581.1724841441&semt=ais_hybrid" className="card-img-top" alt="..." />
  let image2 =  <img src="https://img.freepik.com/free-photo/portrait-young-person-holding-camera-device-world-photography-day_23-2151609208.jpg?ga=GA1.1.1872758581.1724841441&semt=ais_hybrid" className="card-img-top" alt="..." />
  let image3 =  <img src="https://img.freepik.com/free-photo/attractive-enthusiastic-armenian-young-woman-curly-hair-pointing-looking-intrigued-left-show-index-fingers-awesome-blank-space-advertisement-smirking-joyfully-introducing-product-white-background_176420-35016.jpg?ga=GA1.1.1872758581.1724841441&semt=ais_hybrid" className="card-img-top" alt="..." />

  return (
    <>
    <div className='container d-flex flex-wrap gap-5' >
    {/* <p>Ganesh Dutt</p> */}
    <Section1  image={image1} title="Card 1" para="Neelu Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam illum ut dicta odit distinctio? Voluptatem rerum iure velit quibusdam atque, natus excepturi libero delectus error ratione possimus consequatur reiciendis. " ></Section1>
    <Section1 image={image2} title="Card 2" para="Pankaj Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam illum ut dicta odit distinctio? Voluptatem rerum iure velit quibusdam atque, natus excepturi libero delectus error ratione possimus consequatur reiciendis." ></Section1>
    <Section1 image={image3} title="Card 3" para="Kriti Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam illum ut dicta odit distinctio? Voluptatem rerum iure velit quibusdam atque, natus excepturi libero delectus error ratione possimus consequatur reiciendis." ></Section1>
    </div>
       
    </>
  )
}

export default App
