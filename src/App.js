import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar } from './Components/Navbar/navbar';
import { Home } from './Components/Home/home';
import { Skills } from './Components/Skills/skills';
import { Contact } from './Components/Contact/contact';
import { About } from './Components/About/about';
import { Projects } from './Components/Projects/projects';

function App() {
  return(
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
   </>  
    
  );
}

export default App;
