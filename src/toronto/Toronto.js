import { data } from "./data";
import { useState } from "react";
import "./Toronto.css";
//https://travel.usnews.com/Toronto/Things_To_Do/
function Toronto (){
    const [activities, setActivity] = useState(data)
    return (
        <div>
            <p>image carousel</p>
            <p>ABOUT TORONTO</p>
            <p>menu like food, enteranaimtn, shopping </p>
            <h1>Things to do in Toronto | Places to visit</h1>
            {activities.map((activity)=>{
                const {id, picture, title, price, description, typeofattraction} = activity;
                return(
                    <div className="container" key={id}>
                        <img src={picture} alt="attraction" width="300px" height="380px"/>
                        <div className="info">
                        <h2>{title}  {price}</h2>
                        <p>{typeofattraction}</p>
                        <p>{description}</p>
                        </div>
                        <div className="buttonCont">
                        <buton className="btn">X</buton>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Toronto 