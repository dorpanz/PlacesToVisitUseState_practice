import { useState } from "react"

function Quiz(){
    const [answers, setAnswers] = useState({
        kidsquest: '',
        artmuseumquest: '',
        popularspotsquest: '',
        difcultr: '',
        shopp: ''
    }) 

    const handleChange = (e) => {
        const {name, value} = e.target;
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [name]: value
            }))
    }
    return(
        <div className="quiz">
            <div className="container">
            <h2>Recommendation</h2>
            </div>
            <fieldset>
                <legend className="container">Do you travel with kids?</legend>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-check">
                                <input type="radio" name="kidsquest" id="kidsquestYes" value="yes" onChange={handleChange}/>
                                <label htmlFor="flexRadioOne">Yes</label>
                                <input type="radio" name="kidsquest" id="kidsquestNo" value="no" onChange={handleChange}/>
                                <label htmlFor="flexRadioTwo">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
            
            <div className="result">
                {answers.kidsquest === 'yes' && <div>Travel with kids: Consider visiting the Toronto Zoo and Ripley's Aquarium.</div>}
                {answers.kidsquest === 'no' && <div>Travel without kids: Enjoy the Distillery District and Kensington Market.</div>}
            </div>

            <fieldset>
                <legend className="container">Do you enjoy exploring art galleries and museums?</legend>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-check">
                                <input type="radio" name="artmuseumquest" id="artmuseumquestYes" onChange={handleChange} value="yes"/>
                                <label htmlFor="flexRadioOne">Yes</label>
                                <input type="radio" name="artmuseumquest" id="artmuseumquestNo" value="no" onChange={handleChange}/>
                                <label htmlFor="flexRadioTwo">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className="result">
                {answers.artmuseumquest === "yes" && <div>Art and museums: Visit the Royal Ontario Museum and the Art Gallery of Ontario.</div>}
                {answers.artmuseumquest === "no" && <div>Not interested in art and museums: Explore the CN Tower and Casa Loma.</div>}
            </div>

            <fieldset>
                <legend className="container">Do you prefer visiting popular tourist spots or hidden gems?</legend>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-check">
                                <input type="radio" name="popularspotsquest" id="popularspotsquestpop" value="popularspots" onChange={handleChange}/>
                                <label htmlFor="flexRadioOne">Popular spots</label>
                                <input type="radio" name="popularspotsquest" id="popularspotsquesthidden" value="hiddengems" onChange={handleChange}/>
                                <label htmlFor="flexRadioTwo">Hidden gems</label>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className="result">
                {answers.popularspotsquest === 'popularspots' && <div>Popular spots: Check out the CN Tower and Ripley's Aquarium.</div>}
                {answers.popularspotsquest === 'hiddengems' && <div>Hidden gems: Discover Graffiti Alley and the Aga Khan Museum.</div>}
            </div>

            <fieldset>
                <legend className="container">Are you interested in experiencing different cultures and cuisines?</legend>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-check">
                                <input type="radio" name="difcultr" id="difcultryes" value="yes" onChange={handleChange}/>
                                <label htmlFor="flexRadioOne">Yes</label>
                                <input type="radio" name="difcultr" id="difcultrno" value="no" onChange={handleChange}/>
                                <label htmlFor="flexRadioTwo">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className="result"> 
            {answers.difcultr === 'yes' && <div>Cultural experiences: Explore Chinatown and Little Italy.</div>}
            {answers.difcultr === 'no' && <div>Standard experiences: Visit the Toronto Islands and Harbourfront Centre.</div>}
            </div>

            <fieldset>
                <legend className="container">Do you enjoy shopping and visiting local markets?</legend>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-check">
                                <input type="radio" name="shopp" id="shoppYes" value="yes" onChange={handleChange}/>
                                <label htmlFor="flexRadioOne">Yes</label>
                                <input type="radio" name="shopp" id="shoppNo" value="no" onChange={handleChange}/>
                                <label htmlFor="flexRadioTwo">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className="result">
            {answers.shopp === 'yes' && <div>Shopping: Stroll through St. Lawrence Market and Yorkville.</div>}
            {answers.shopp === 'no' && <div>Not into shopping: Relax at High Park and Edwards Gardens.</div>}
            </div>
        </div>
    )
}

export default Quiz