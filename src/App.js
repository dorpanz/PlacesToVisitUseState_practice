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
import Quiz from './quiz/Quiz';

function App() {
  return (
    <div>
      <Router>
        <nav className="menu-bar">
          <Link className='links-item homepage-link' to="/">TORONTO EXPLORE</Link>
          <div className="right-links">
            <Link className='links-item' to="/attractions">ATTRACTIONS</Link>
            <Link className='links-item' to="/food-and-drink">FOOD AND DRINK</Link>
            <Link className='links-item' to="/quiz">QUIZ</Link>
        </div>
        </nav>
        <Fragment>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/attractions" element={<AttractionMain />} />
            <Route path="/food-and-drink" element={<FoodDrink/>} />
            <Route path="/quiz" element={<Quiz/>}/>
          </Routes>
        </Fragment>
      </Router>
      <div>
        <footer className="footer">
          <p>Copyright © 2024 Toronto Explore</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
