import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import backgaHero from '../assets/img/packagHero.png'
import ContainerStates from '../components/ContainerStates/ContainerStates'
import States from '../components/States/States'
import maldives from '../assets/img/maldives.png'
import switzerland from '../assets/img/switzerlandCard.png'
import berlin from '../assets/img/berlin.png'
import Torronto from '../assets/img/berlin.png'
import Baku from '../assets/img/baku.png'
import Chinese from '../assets/img/chinese.png'
import Footer from '../components/Footer/Footer'





const PackagesPage = () => {
  return (
    <div>
      <NavBar menu={[

        { title: "Home", path: '/' },
        { title: "About", path: '/AboutPage' },
        { title: "Packages", path: '/PackagesPage' },
        { title: "Services", path: '/ServicesPage' }

      ]}

        btn="Get in Touch" />


      <Hero image={backgaHero} title={
        <span
          style={{
            fontFamily: 'Yesteryear',
            fontSize: '7.5rem',
            fontWeight: '400',
            color: '#FFFFFF',
          }}>  Travel With Us </span>} />

      <States >
        <ContainerStates image={maldives} date="27, September 2023 " people="30+ People" title="Maldives" text="Qui tempore voluptate qui quia commodi rem praesentium alias et." cost="3000 $" Evaluation="5.0" />
        <ContainerStates image={switzerland} date="13, October 2023 " people="120+ People" title="Switzerland" text="Qui tempore voluptate qui quia commodi rem praesentium alias et." cost="1290 $" Evaluation="4.9" />
        <ContainerStates image={berlin} date="2, November 2022" people="3139+ Peoples" title="Berlin" text="Qui tempore voluptate qui quia commodi rem praesentium alias et." cost="2790 $" Evaluation="5.0" />
        <ContainerStates image={Torronto} date="14, December 2022 " people="50+ People" title="Torronto" text="Qui tempore voluptate qui quia commodi rem praesentium alias et." cost="1110 $" Evaluation="4.0" />
        <ContainerStates image={Baku} date="20, September 2022 " people="80+ People" title="Baku" text="Qui tempore voluptate qui quia commodi rem praesentium alias et." cost="1220 $" Evaluation="4.5" />
        <ContainerStates image={Chinese} date="27, August 2022 " people="100+ People" title="Chinese" text="Qui tempore voluptate qui quia commodi rem praesentium alias et." cost="2500 $" Evaluation="5.0" />

      </States>
      <Footer />

    </div>
  )
}

export default PackagesPage

