"use client"
import Herosection from '../Homepage/Herosection'
import Homesecton from '../Homesecton'
import InvestorsH from '../InvestorsH'
import Features from '../features'
 import Testimonialed from '../Testimonials'
import Banner4 from '../Banner4'
import Footer from '../footer/footer'
 
const Allsection = () => {
  return (
    <>
    <div className="overflow-hidden">
     <Herosection/>
     <Homesecton/> 
     <InvestorsH/>
     <Features/>
     <Testimonialed/>
     <Banner4/>
     </div>
    </>
  )
}

export default Allsection
