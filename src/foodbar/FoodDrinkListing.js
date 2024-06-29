import { useState } from "react";
import { Card } from "react-bootstrap";

function FoodDrinkListing({ foodData, showMoreText }) {
    const [numberShown, setNumberShown] = useState(9);

    function showMoreItems() {
        setNumberShown(numberShown + 6);
    }

    return (
        <div>
            <div className="attraction-grid">
                {foodData.slice(0, numberShown).map((item) => {
                    const { id, title, price, img, description, address, foodtype, showMore } = item;
                    return (
                        <Card key={id} style={{ width: '350px' }} className="attraction-section-variant">
                            <Card.Img src={img} variant="top" alt={`fooddrink-${title}`} width="350px" height="300px" />
                            <Card.Body>
                                <Card.Title className="title">
                                    {title}
                                    <div className="typeofattraction-name">{foodtype}</div>
                                </Card.Title>
                                <hr/>
                                <Card.Text className="description-attracton">
                                    <span className='price-address'>
                                        <span>Price Range: {price}</span>
                                        <span>Address: {address}</span>
                                    </span>
                                    <span className="description-food">
                                        {showMore ? description : description.slice(0, 150) + "..."}
                                        <button className="btn-showmore" onClick={() => showMoreText(item)}>SHOW {showMore ? "LESS" : "MORE"}</button>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
            <div className="container">
                {numberShown < foodData.length ?
                    <button onClick={showMoreItems} className="btn-quiz">SHOW MORE</button> : null
                }
            </div>
        </div>
    );
}

export default FoodDrinkListing;
