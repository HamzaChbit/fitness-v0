
import Consultation from "../components/Consultation";
import Courses from "../components/Courses";
import Forms from "../components/Forms";
import Hero from "../components/Hero";
import HeroDesc from "../components/HeroDesc";
import Slider from "../components/Slider";
import Team from "../components/Team";


export default function Home() {
  return (
  <div  className="mx-auto  " >
       <Hero/>
        <HeroDesc/>
      <Slider/> 
      <Consultation/>
      <Team/>
   < Courses/>
       <Forms/>   
  </div>
  )
}
