
import './App.css'
/* import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import bg from './assets/img/hero.png'
import CATEGORY from './components/CATEGORY/CATEGORY'
import Container from './components/container/container'
import firstpic from './assets/img/Guided.png'
import secpic from './assets/img/Flights.png'
import thrdpic from './assets/img/Religious.png'
import fourpic from './assets/img/Medical.png'
import Promotion from './components/Promotion/Promotion'
import promoNa from './assets/img/Nature.jpg'
import promoCi from './assets/img/Cities.png'
import ContainerPromo from './components/ContainerPromo/ContainerPromo'
import Trendy from './components/Trendy/Trendy.JSX'
import ContainerTrendy from './components/ContainerTrendy/ContainerTrendy'
import one from './assets/img/1.png'
import swland from './assets/img/switzerland.png'
import two from './assets/img/2.png'
import three from './assets/img/3.png'
import egypt from './assets/img/egypt.png'
import prazil from './assets/img/prazel.png'
import Footer from './components/Footer/Footer' */
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PackagesPage from './pages/PackagesPage'
import ServicesPage from './pages/ServicesPage'






function App() {
 
  return (
    <>
  
   

   <Routes>

    <Route path='/' element={<HomePage/>} />
    <Route path='/AboutPage' element={<AboutPage/>} />
    <Route path='/PackagesPage' element={<PackagesPage/>}/> 
    <Route path='/ServicesPage' element={<ServicesPage/>}/>
 
   </Routes>

   

    </>
  )
}

export default App
