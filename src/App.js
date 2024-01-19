import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Home from './componets/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProjectDetail from './componets/ProjectDetails';
import About from './componets/About';
import Experience from './componets/Experience';
import Prjects from './componets/Projects';
function App() {
  return (
    <div>
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/projectDetails" element = {<ProjectDetail/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path='/experience' element = {<Experience/>}/>
      <Route path='/projets' element = { <Prjects/>}/>
      </Routes>
      <Footer/>
    </Router>
     
    </div>
  );
}

export default App;
