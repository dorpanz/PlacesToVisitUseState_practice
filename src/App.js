import './App.css';
import Main from './landing/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AttractionMain from './attractions/AttractionsMain';
import ScrollToTop from './ScrollToTop';
import { Fragment } from 'react';
import FoodDrink from './foodbar/FoodDrink';

function App() {
  return (
    <div>
      <Router>
        <nav className="menu-bar">
          <Link className='links-item homepage-link' to="/">TORONTO EXPLORE</Link>
          <div className="right-links">
            <Link className='links-item' to="/attractions">ATTRACTIONS</Link>
            <Link className='links-item' to="/food-and-drink">FOOD AND DRINK</Link>
            <Link className='links-item' to="/stories-about-toronto">QUIZ</Link>
        </div>
        </nav>
        <Fragment>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/attractions" element={<AttractionMain />} />
            <Route path="/food-and-drink" element={<FoodDrink/>} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
