import Card from 'react-bootstrap/Card';

function Toeat ({toeat}){
    return(
        <div className="attraction-grid">
            {toeat.slice(0,6).map((item)=> {
                const {id, title, price, img, description, address, type}=item;
                return (
                    <Card key={id} style={{ width: '400px' }} className="attarction-section-variamt">
                        <Card.Img variant="top" src={img} alt="attraction-{`${ title }`}" width="400px" height="300px"/>
                        <Card.Body>
                        <Card.Title className="title">{title}
                        <div className="typeofattraction-name">{type}</div>
                        </Card.Title>
                        <hr/>
                        <Card.Text className="description-attraction">
                        <div className='price-address'>
                            <div>Price Range:{price} </div>
                            <div>Address: {address}</div>
                        </div>
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

export default Toeat