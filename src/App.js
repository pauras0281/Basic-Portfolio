import About from './About';
import './App.css';
import Contact from './Contact';
import Navbar from './Navbar';
import ProjectGallery from './ProjectGallery';
import TechStack from './TechStack';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <About />
      <TechStack />
      <ProjectGallery />
      <Contact />
      
    </div>
  );
}

export default App;
