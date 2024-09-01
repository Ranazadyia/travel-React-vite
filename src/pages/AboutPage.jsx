import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import aboutImge from './../assets/img/aboutHero.png'
import PromotionAbout from '../components/PromotionAbout/PromotionAbout'
import promoAbout from '../assets/img/promoAbout.png'
import ContainerPromoAbout from '../components/ContainerPromoAbout/ContainerPromoAbout'
import Wanderlust from '../components/Wanderlust/Wanderlust'
import Trend from '../components/Trend/Trend'
import Footer from '../components/Footer/Footer'
/* import aboutUs from '../assets/img/aboutUs.png' */


const AboutPage = () => {
  return (
    <div>
      <NavBar menu={[

        { title: "Home", path: '/' },
        { title: "About", path: '/AboutPage' },
        { title: "Packages", path: '/PackagesPage' },
        { title: "Services", path: '/ServicesPage' }
      ]}
        btn="Get in Touch" />
      <Hero image={aboutImge} title={
        <span
          style={{
            fontFamily: 'Yesteryear',
            fontSize: '120px',
            fontWeight: '400',
            color: '#FFFFFF',
          }}>  About Us</span>} />
      <PromotionAbout>
        <ContainerPromoAbout subtitle="Promotion" title="We Provide You Best Europe Sightseeing Tours" paragraph="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!" image={promoAbout} butt="View Packages" />
      </PromotionAbout>
      <Wanderlust />
      
        {/* <ContainerPromoAbout   subtitle="Trend" title="Our Popular Tour Plans" paragraph ="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. "  style={{ width: "660px" }} image={aboutUs}   butt="View Packages"  showButton={false} 
  reverse={true}/>
 */}
      <Trend/>
      <Footer/>
    </div>
  )
}

export default AboutPage