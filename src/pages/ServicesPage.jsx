import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import aboutImge from './../assets/img/aboutHero.png'
import Footer from '../components/Footer/Footer'

const ServicesPage = () => {
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
          }}> Services </span>} />
      <Footer />



    </div>


  )
}

export default ServicesPage