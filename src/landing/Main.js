import { useState } from "react"
import phone3D from "../pictures/phone.png"
import image from "../pictures/toronto_main.webp"
import { data } from "../toronto/data.js"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "./Main.css"
function Main (){
    const [attractions, setAttractions] = useState(data)
    return (
        <div>
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
                Your Toronto adventure starts here!</p>
            </div>

            <div className="quiz-try">
                <div className="container">
                    <h3>TRY NEW FEATURE</h3>
                </div>
                <div className="container-quiz-try">
                    <p className="about-quiz">Embark on a journey of discovery with our "Wanderlust quiz" feature! Unsure where to explore next? Take our fun and interactive quiz to uncover your perfect travel destination. Answer a few simple questions, and let our algorithm match you with the ideal spot based on your preferences and interests.</p>
                    
                    <img src={phone3D} alt="3D-phone-with-swipe" width="250px"/>
                </div>
                <div className="container">
                <button className="btn-quiz">TRY OUT NOW</button>
                </div>
            </div>
                
            
            <div className="attraction-section">
            <hr/>
            <div className="container">
                <h4>ATTRACTIONS</h4>
            </div>
            <hr/>
            <div className="attraction-grid">
            {attractions.slice(0,6).map((attraction)=> {
                const { id, picture, title, description, typeofattraction} = attraction;
                return (
                <Card key={id} style={{ width: '400px' }} className="attarction-section-variamt">
                    <Card.Img variant="top" src={picture} alt="attraction-{`${ title }`}" width="400px" height="300px"/>
                    <Card.Body>
                    <Card.Title className="title">{title}
                    <div className="typeofattraction-name">{typeofattraction}</div>
                    </Card.Title>
                    <hr/>
                    <Card.Text className="description-attraction">
                    <p>{description}</p>
                    </Card.Text>
                    <div className="container">
                    <Button variant="primary" className="btn-add">ADD TO YOUR LIST</Button>
                    </div>
                    </Card.Body>
                </Card>
                )
            })}

            </div>
            <div className="container">
                <button className="btn-quiz">SEE MORE...</button>
            </div>
            
            </div>
            <div className="food-and-drink-section">
            <hr/>
            <div className="container">
                <h4>FOOD AND DRINK</h4>
            </div>
            <hr/>
            <div className="container">
                <button className="btn-quiz">SEE MORE...</button>
            </div>
            </div>

            <div className="stories-section">
            <hr/>
            <div className="container">
                <h4>STORIES ABOUT TORONTO</h4>
            </div>
            <hr/>
            <div className="container">
                <button className="btn-quiz" >SEE MORE...</button>
            </div>
            </div>
        </div>
    );
}

export default Main