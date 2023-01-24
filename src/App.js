import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import Contact  from './Components/Pages/Contact';
import Navbar from  './Components/Subcomponents/Navbar'
function App() {
  return (
      <>
      
        <Navbar/>
        <Home/>
        <Projects/>
        <Contact/>
      </>
  );
}

export default App;
