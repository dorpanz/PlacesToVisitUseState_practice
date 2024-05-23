import './App.css';
import Main from './landing/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
import AttractionMain from './attractions/AttractionsMain';
function App() {
  return (
    <div>
      <Router>
        <nav className="menu-bar">
          <Link className='links-item' to="/">TORONTO EXPLORE</Link>
          <Link className='links-item' to="/attractions">ATTRACTIONS</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/attractions" element={<AttractionMain/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
