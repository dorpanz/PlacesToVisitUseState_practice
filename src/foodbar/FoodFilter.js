function FoodFilter({handleClick, activeButton}){
    return(
        <div className="buttons-all-filter">
            <button onClick={()=>handleClick("")} className={`btn-filter ${activeButton === '' ? 'active' : ''}`}>ALL</button>
            <button onClick={()=>handleClick("Restaurant")} className={`btn-filter ${activeButton === 'Restaurant' ? 'active' : ''}`}>RESTAURANT</button>
            <button onClick={()=>handleClick("Coffee")} className={`btn-filter ${activeButton === 'Coffee' ? 'active' : ''}`}>COFFEE</button>
            <button onClick={()=>handleClick("Pizzeria")} className={`btn-filter ${activeButton === 'Pizzeria' ? 'active' : ''}`}>PIZZA</button>
            <button onClick={()=>handleClick("Bar")} className={`btn-filter ${activeButton == "Bar" ? 'active' : ''}`}>BAR</button>
        </div>
    )
}

export default FoodFilter