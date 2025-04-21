import HeroSection from "./Components/HeroSection/HeroSection"
import MyRecentWork from "./Components/MyRecentWork/MyRecentWork";
import Services from "./Components/Services/Services";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";



function App() {
 
  return (
    <div className="font-[Sora]">
      <HeroSection></HeroSection>
      <Services></Services>
      <MyRecentWork></MyRecentWork>
      <Education></Education>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App
