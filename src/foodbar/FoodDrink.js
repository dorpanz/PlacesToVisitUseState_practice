import { useState } from "react"
import { food } from "../all-data/food.js"
import FoodDrinkListing from "./FoodDrinkListing"
import FoodFilter from "./FoodFilter.js"

function FoodDrink(){
    const [foodData, setfoodData]= useState(food)
    const [showMore, setShowmore] = useState(false)
    const [activeButton, setActiveButton] = useState(null);

    const showMoreText = (item) =>{
        item.showMore =!item.showMore;
        setShowmore(!showMore);
    };

    const filterbyType = (typeOfFood) =>{
        if (typeOfFood.length === 0){
            setfoodData(food);
        }
        else{
            const filteredData = food.filter((item) => item.type===typeOfFood);
            setfoodData(filteredData);
        }
    }

    const handleClick = (typeOfFood)=>{
        filterbyType(typeOfFood);
        setActiveButton(typeOfFood)
    }
    return(
        <div>
            <hr/>
            <div className="container">
                <h4>FOOD AND DRINK</h4>
            </div>
            <hr/>
            <FoodFilter handleClick={handleClick} activeButton={activeButton}/>
            <div>
                <FoodDrinkListing foodData={foodData} showMoreText={showMoreText} />
            </div>
        </div>
    )
}

export default FoodDrink