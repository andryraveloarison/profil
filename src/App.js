import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Resume from './Components/Resume';
import './styles/App.css';
import { Routes , Route} from 'react-router-dom'
import Contact from './Components/Contact';
import './styles/css/bootstrap.css';
import './styles/css/animate.css';
import './styles/css/flexslider.css';
import './styles/css/bootstrap.css';
import './styles/css/style.css';

function App() {
  return (
    <div>
    <NavBar />
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/about" element={ <About/> }></Route>
      <Route path="/contact" element={ <Contact/> }></Route>
      <Route path="/resume" element={ <Resume/> }></Route>
    </Routes>
    </div>
  );
}

export default App;
