import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './components/footer';
import AnimatedRoutes from './components/animatedRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <AnimatedRoutes/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
