import { data } from "../all-data/data.js"
import { useState } from "react"
import "./styles.css"
import AttractionsDisplay from "./AtractionsDisplay.js";
import Filtering from "./Filtering.js";

function AttractionMain (){
    const [attractions, setAttractions] = useState(data);
    const [showMore, setShowmore] = useState(false)
    const [activeButton, setActiveButton] = useState(null);
    const showMoreText = (item) =>{
        item.showMore =!item.showMore;
        setShowmore(!showMore);
    };
    const handleClick = (category) => {
        chosenCategory(category);
        setActiveButton(category);
    };
    const chosenCategory = (categoryTypes) => {
        if (categoryTypes.length === 0){
            setAttractions(data)
        }else{
            const category = data.filter((item) => item.category===categoryTypes)
        setAttractions(category);
        }
    };


    return (
        <div>
            <hr/>
            <div className="container">
                <h4>ATTRACTIONS</h4>
            </div>
            <hr/>
            <Filtering chosenCategory={chosenCategory} handleClick={handleClick} activeButton={activeButton}/>
            <div >
                <AttractionsDisplay attractions={attractions} showMoreText={showMoreText} />
            </div>
        </div>
    )
}

export default AttractionMain