import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import bg from './../assets/img/hero.png'
import CATEGORY from '../components/CATEGORY/CATEGORY'
import ContainerCatogery from '../components/ContainerCatogery/ContainerCatogery'
import firstpic from './../assets/img/Guided.png'
import secpic from './../assets/img/Flights.png'
import thrdpic from './../assets/img/Religious.png'
import fourpic from './../assets/img/Medical.png'
import Promotion from '../components/Promotion/Promotion'
import promoNa from './../assets/img/Nature.jpg'
import promoCi from './../assets/img/Cities.png'
import ContainerPromo from '../components/ContainerPromo/ContainerPromo'
import Trendy from '../components/Trendy/Trendy.JSX'
import ContainerTrendy from '../components/ContainerTrendy/ContainerTrendy'
import one from './../assets/img/1.png'
import swland from './../assets/img/switzerland.png'
import two from './../assets/img/2.png'
import three from './../assets/img/3.png'
import egypt from './../assets/img/egypt.png'
import prazil from './../assets/img/prazel.png'
import Footer from '../components/Footer/Footer'


const HomePage = () => {
  return (
    <div>
  
{/*   <NavBar menu={["Home" ,"About" ,"Packages" ,"Services"]} btn="Get in Touch" />

 */}  
 
 <NavBar menu={[

{ title:"Home" ,path:'/'} ,
{ title:"About" , path:'/AboutPage' },
{ title:"Packages" ,path:'/PackagesPage'},
{ title:"Services" , path :'/ServicesPage'}

  ]} 

  btn="Get in Touch" />
 
  <Hero image ={bg} title ="No matter where you’re going to, we’ll take you there"  />

    <CATEGORY>
   <ContainerCatogery imag={firstpic} title="Guided Tours" desc="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
   <ContainerCatogery imag={secpic} title="Best Flights Options" desc="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
   <ContainerCatogery imag={thrdpic} title="Religious Tours" desc="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
   <ContainerCatogery imag={fourpic} title="Medical insurance" desc="sunt qui repellat saepe quo velit aperiam id aliquam placeat." />
   </CATEGORY>

    <Promotion>
    <ContainerPromo imag ={promoNa} subtitle="Promotion"  title="Explore Nature" butt="View Packages"   />
    <ContainerPromo imag ={promoCi} subtitle="Promotion"  title="Explore Cities" butt="View Packages " />
   </Promotion>

   <Trendy>
   <ContainerTrendy image={one} flag={swland} text="30 People going" title="Switzerland" />
   <ContainerTrendy image={two} flag={prazil} text="60 People going" title="Amazon" />
   <ContainerTrendy image={three} flag={egypt} text="120 People going" title="Giza" />
   </Trendy>
   
   <Footer/>  
    
    </div>
  )
}

export default HomePage