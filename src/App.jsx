import "@radix-ui/themes/styles.css";
import './App.css'
import { Header } from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import { Slider } from "./library/slider/Slider";
function App() {
 

  return (
    <>
       
     <BrowserRouter>
     <Header/>
     
    </BrowserRouter>

    <div className="md:flex flex-row justify-between">
      <Slider />
      <Slider />
    </div>
    </>
  )
}

export default App
