import { data } from "./data";
import { useState } from "react";

function Toronto (){
    const [activities, setActivity] = useState(data)

    return (
        <div>
            <h1>Things to do in Toronto | Places to visit</h1>
            {activities.map((activity)=>{
                const {id, picture, title, description, typeofattraction} = activity;
                return(
                    <div key={id}>
                        <img src={picture} alt="attraction" width="300px"/>
                        <h2>{title}</h2>
                        <p>{typeofattraction}</p>
                        <p>{description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Toronto 