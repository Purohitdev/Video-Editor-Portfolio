import Navbar from '../Nav'
import Hero from './Hero'
import About from './About'
import Services from './Service'
import Project from './Project'
import Footer from '../Footer'
// import DiagonalMarquee from './Crossmarquee'

function Home() {
  return (
    <div className="font-sans bg-[#141414] text-white">
   <Navbar/>
   <Hero/>
   <About/>
   <Project/>
   <Services/>

   <Footer/>
  </div>
  )
}

export default Home