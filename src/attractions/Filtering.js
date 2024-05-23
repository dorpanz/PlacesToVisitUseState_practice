import "./styles.css"
function Filtering ({chosenCategory}){
    return (
        <div className="buttons-all-filter">
            <button className="btn-filter" onClick={() => chosenCategory([])}>All</button>
            <button className="btn-filter" onClick={() => chosenCategory(["Museum", "Castle"])}>Museums</button>
            <button className="btn-filter" onClick={() => chosenCategory(["Garden", "Natural"])}>Nature</button>
            <button className="btn-filter" onClick={() => chosenCategory(["Market", "district"])}>Market</button>
            <button className="btn-filter" onClick={() => chosenCategory(["Aquarium", "Zoo", "Entertainment", "Rink", "Amusement", "Theatre", "Observation"])}>Entertainment</button>
        </div>
    )
}

export default Filtering