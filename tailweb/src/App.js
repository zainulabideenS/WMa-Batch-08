import About from "./components/aboutus/About";
import Blog from "./components/blog/Blog";
import Desc from "./components/desc/Desc";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Plan from "./components/plan/Plan";
import Services from "./components/services/Services";
import Trust from "./components/trust/Trust";

function App() {
  return (
    <>
       <Header/>
       <Services/>
       <About/>
       <Desc/>
       <Plan/>
       <Trust/>
       <Blog/>
       <Footer/>    
       </>
  );
}

export default App;
