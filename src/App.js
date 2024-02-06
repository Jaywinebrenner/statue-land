import './styles/app.scss';
import Navigation from './components/Navigation';
import Home from './pages/Home'; 
import Work from './pages/Work'; 
import About from './pages/About'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
