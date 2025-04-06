// import Navbar from '../Nav'
// import Hero from './Hero'
// import About from './About'
// import Services from './Service'
// import Project from './Project'
// import Footer from '../Footer'
// // import DiagonalMarquee from './Crossmarquee'

// function Home() {
//   return (
//     <div className="font-sans bg-[#141414] text-white">
//    <Navbar/>
//    <Hero/>
//    <About/>
//    <Project/>
//    <Services/>

//    <Footer/>
//   </div>
//   )
// }

// export default Home


import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

import Navbar from '../Nav'
import Hero from './Hero'
import About from './About'
import Services from './Service'
import Project from './Project'
import Footer from '../Footer'
// import DiagonalMarquee from './Crossmarquee'

function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="font-sans bg-[#141414] text-white">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Services />
      <Footer />
    </div>
  )
}

export default Home
