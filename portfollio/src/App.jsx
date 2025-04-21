import HeroSection from "./Components/HeroSection/HeroSection"
import MyRecentWork from "./Components/MyRecentWork/MyRecentWork";
import Services from "./Components/Services/Services";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";



function App() {
 
  return (
    <div className="font-[Sora]">
      <HeroSection></HeroSection>
      <Services></Services>
      <MyRecentWork></MyRecentWork>
      <Education></Education>
      <Skills></Skills>
    </div>
  );
}

export default App
