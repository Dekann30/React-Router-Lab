import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Stocks from './pages/Stocks';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/stocks' element={<Stocks />} />
      </Routes>
    </div>
  );
}

export default App;
