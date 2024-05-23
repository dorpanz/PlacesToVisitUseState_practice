import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AttractionsDisplay ({attractions, showMoreText}){
    return (
        <div className="attraction-grid">
            {attractions.map((attraction) => {
                const { id, picture, title, description, typeofattraction, showMore} = attraction;
                return (
                    <Card key={id} style={{ width: '350px' }} className="attarction-section-variamt">
                    <Card.Img variant="top" src={picture} alt="attraction-{`${ title }`}" width="350px" height="300px"/>
                    <Card.Body>
                    <Card.Title className="title">{title}
                    <div className="typeofattraction-name">{typeofattraction}</div>
                    </Card.Title>
                    <hr/>
                    <Card.Text className="description-attraction">
                    {showMore ? description : description.substring(0,150) + "..."}
                    <button className="btn-showmore" onClick={()=>showMoreText(attraction)}> {showMore ? "SHOW LESS" : "SHOW MORE"}</button>
                    </Card.Text>
                    <div className="container">
                    <Button variant="primary" className="btn-add">ADD TO YOUR LIST</Button>
                    </div>
                    </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default AttractionsDisplay