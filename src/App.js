import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Stock from './pages/Stock';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/stocks' element={<Dashboard />} />
        <Route path='/stocks/:symbol' element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
