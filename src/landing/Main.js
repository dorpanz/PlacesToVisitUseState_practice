import { useState } from "react"
import phone3D from "../pictures/phone.png"
import image from "../pictures/toronto_main.webp"
import { data } from "../all-data/data.js"
import { Link }from "react-router-dom";

import "./Main.css"
import AttractionListing from "./AttractionsListing";
import Toeat from "./Toeat";
import { food } from "../all-data/food.js"


import Stories from "./Stories";

function Main (){
    const [attractions, setAttractions] = useState(data)
    const [toeat, setToEat] = useState(food)
    const [showMore, setShowMore] = useState(false)
    const showMoreText = (item) => {
        item.showMore = !item.showMore;
        setShowMore(!showMore)
    }
    return (
        <div>
            <div className="main">
                <div className="container">
                    <h1>TORONTO</h1>
                </div>
                <div className="container">
                    <h3>WONDERING WHERE TO WANDER?</h3>
                </div>
                <div className="container">
                    <img src={image} alt="Toronto" width="700px"/>
                </div>
                <div className="container">
                    <p className="about">Welcome to Toronto, the vibrant heart of Canada! 
                    If you're new to the city or simply seeking inspiration for your next adventure, you've landed in the perfect spot. Our website is your ultimate guide to exploring Toronto's endless possibilities.
                    <br/>Your Toronto adventure starts here!</p>
                </div>
            </div>


            <div className="quiz-try">
                <div className="container">
                    <h2>TRY NEW FEATURE</h2>
                </div>
                <div className="container-quiz-try">
                    <div className="about-quiz">
                        <div className="textQuizAbout">Unsure where to explore next? </div>
                        <div className="textQuizAboutTwo">Take our fun and interactive quiz to uncover your perfect travel destination.</div>
                        
                    </div>
                    
                    <img src={phone3D} alt="3D-phone-with-swipe" width="250px"/>
                </div>
                <div className="container">
                <Link to="/quiz" className="btn-quiz">TRY OUT NOW</Link>
                </div>
            </div>
                
            
            <div className="attraction-section">
                <hr/>
                <div className="container">
                    <h4>ATTRACTIONS</h4>
                </div>
                <hr/>
                <AttractionListing attractions={attractions} showMore={showMore} showMoreText={showMoreText}/>
                <div className="container">
                    <Link to="/attractions" className="btn-quiz seeMorebtn">SEE MORE</Link>
                </div>
            </div>



            <div className="food-and-drink-section">
            <hr/>
            <div className="container">
                <h4>FOOD AND DRINK</h4>
            </div>
            <hr/>
            <Toeat toeat={toeat}/>
            <div className="container">
                <Link to="/food-and-drink" className="btn-quiz seeMorebtn">SEE MORE</Link>
            </div>
            </div>

            <div className="stories-section">
            <hr/>
            <div className="container">
                <h4>FACTS ABOUT TORONTO</h4>
            </div>
            <hr/>
            <Stories/>
            </div>
        </div>
    );
}

export default Main