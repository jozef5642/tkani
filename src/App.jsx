import './App.css'
import "@radix-ui/themes/styles.css";
import { BrowserRouter } from "react-router-dom";
import { Approuter } from './components/approuter/Approuter';
import { Footer } from './components/footer/Footer';
import { NavBar } from './components/navbar/Navbar';
import { Container } from '@radix-ui/themes';


function App() {
 

  return (
    <>
    <BrowserRouter>
      <NavBar/>
        <Approuter/>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
