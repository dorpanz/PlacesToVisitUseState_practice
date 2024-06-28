import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AttractionListing ({ attractions}){
    return(
        <div className="attraction-grid">
        {attractions.slice(0,6).map((attraction)=> {
            const { id, picture, title, description, typeofattraction} = attraction;
            return (
            <Card key={id} style={{ width: '400px' }} className="attarction-section-variamt">
                <Card.Img variant="top" src={picture} alt="attraction-{`${ title }`}" style={{ objectFit: 'cover', width: '400px', height: '300px' }}/>
                <Card.Body>
                <Card.Title className="title">{title}
                <div className="typeofattraction-name">{typeofattraction}</div>
                </Card.Title>
                <hr/>
                <Card.Text className="description-attraction">
                <p>{description.substring(0,description.indexOf('.'))}
                </p>
                </Card.Text>
                
                </Card.Body>
            </Card>
            )
        })}
        </div>
    )
}

export default AttractionListing