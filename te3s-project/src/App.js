import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Members from './pages/Members';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/members" element={<Members/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
