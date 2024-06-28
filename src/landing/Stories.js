import { useState } from "react";
import { stories } from "../all-data/stories";
import { Link }from "react-router-dom";

function Stories(){
    const [story, setStory] = useState(0);
    const {title, fact, id} = stories[story];

    const nextBtn = ()=>{
        setStory((story)=>{
            story++;
            if(story > stories.length - 1){
            story=0;
        }
        return story;
        });
    }

    const prevvStory = ()=>{
        setStory((story)=>{
            story--;
            if (story < 0){
                story=stories.length-1;
            }
            return story;
        })
    }
    return(
        <div className="container storyCont" key={id}>
            <button onClick={prevvStory} className="buttonStory buttonStoryPrev">PREV</button>
            <div className="displayStory">
            <div>
                <h2 className="titleStory">{title}</h2>
            </div>
            <div>
                <p>{fact}</p>
            </div>

            </div>
            <button onClick={nextBtn} className="buttonStory buttonStoryNext">NEXT</button>
        </div>
    )
}

export default Stories