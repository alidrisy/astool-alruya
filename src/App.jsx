import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Services from './components/services/Services'
import Work from './components/work/Work'
import Connect from './components/connect/Connect'
import Footer from './components/footer/Footer'

/**
 * The main application component.
 * This component renders the Header component and serves as the root of the application.
 *
 * @returns {JSX.Element} - The JSX representation of the App component.
 */
function App() {
  return (
    <main className='relative'>
     <Header />
     <Banner />
     <About />
     <Services />
     <Work />
     <Connect />
     <Footer />
    </main>
  )
}

export default App
