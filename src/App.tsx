import HeroSectionComponent from "./Components/HeroSectionComponent"
import JoinMobileAppComponent from "./Components/JoinMobileAppComponent"
import MobileAppComponent from "./Components/MobileAppComponent"
import TestimonialComponent from "./Components/TestimonialComponent"
import LayOutComponent from "./Layout/Index"


function App() {


  return (
    <>
      <LayOutComponent>

        <HeroSectionComponent/>
        <TestimonialComponent />
         <JoinMobileAppComponent/>
        <MobileAppComponent />
      </LayOutComponent>
    </>
  )
}

export default App
