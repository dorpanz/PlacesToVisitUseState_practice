import "./styles.css"
function Filtering ({handleClick, activeButton}){
    return (
        <div className="buttons-all-filter">
            <button
                className={`btn-filter ${activeButton === '' ? 'active' : ''}`}
                onClick={() => handleClick('')}
            >
                ALL
            </button>
            <button
                className={`btn-filter ${activeButton === 'Museum' ? 'active' : ''}`}
                onClick={() => handleClick('Museum')}
            >
                MUSEUMS
            </button>
            <button
                className={`btn-filter ${activeButton === 'Nature' ? 'active' : ''}`}
                onClick={() => handleClick('Nature')}
            >
                NATURE
            </button>
            <button
                className={`btn-filter ${activeButton === 'Shopping' ? 'active' : ''}`}
                onClick={() => handleClick('Shopping')}
            >
                SHOPPING
            </button>
            <button
                className={`btn-filter ${activeButton === 'Entertainment' ? 'active' : ''}`}
                onClick={() => handleClick('Entertainment')}
            >
                ENTERTAINMENT
            </button>
        </div>
    )
}

export default Filtering