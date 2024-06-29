import Card from 'react-bootstrap/Card';

function Toeat({ toeat }) {
    return (
        <div className="attraction-grid">
            {toeat.slice(0, 6).map((item) => {
                const { id, title, img, description, type } = item;
                return (
                    <Card key={id} style={{ width: '400px' }} className="attraction-section-variant">
                        <Card.Img variant="top" src={img} alt={`attraction-${title}`} width="400px" height="300px" />
                        <Card.Body>
                            <Card.Title className="title">
                                {title}
                                <div className="typeofattraction-name">{type}</div>
                            </Card.Title>
                            <hr />
                            <Card.Text className="description-attraction">

                                <span>{description.substring(0, description.indexOf('.'))}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}

export default Toeat;
