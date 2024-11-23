import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EnergyMonitor from './components/Energy/EnergyMonitor';
import EnergyDetails from './components/Energy/EnergyDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import EnergyInfo from './components/Energy/EnergyInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/monitor" element={<EnergyMonitor />} />
            <Route path="/monitor/:energyType" element={<EnergyDetails />} />
            <Route path="/info" element={<EnergyInfo />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;