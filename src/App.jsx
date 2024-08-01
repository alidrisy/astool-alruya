import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner1'
import About from './components/about/About'
import Services from './components/services/Services'
import Work from './components/work/Work'
import Connect from './components/connect/Connect'
/**
 * The main application component.
 * This component renders the Header component and serves as the root of the application.
 *
 * @returns {JSX.Element} - The JSX representation of the App component.
 */
function App() {
  return (
    <main>
     <Header />
     <Banner />
     <About />
     <Services />
     <Work />
     <Connect />
     <div className='h-[200px] bg-gray-100'></div>
    </main>
  )
}

export default App
