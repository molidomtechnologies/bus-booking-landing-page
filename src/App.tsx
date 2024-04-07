import MobileAppComponent from "./Components/MobileAppComponent"
import TestimonialComponent from "./Components/TestimonialComponent"
import LayOutComponent from "./Layout/Index"


function App() {


  return (
    <>
      <LayOutComponent>
        <TestimonialComponent />
        <MobileAppComponent />
      </LayOutComponent>
    </>
  )
}

export default App
