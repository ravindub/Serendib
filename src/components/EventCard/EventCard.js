import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
//import { EventCard.Img } from 'react-bootstrap';
//import { EventCard.body } from 'react-bootstrap';
//import { EventCard.Title } from 'react-bootstrap';
//import { EventCard.Text } from 'react-bootstrap';
class EventCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./4.jpg" />
                    <Card.Body>
                        <Card.Title>Trip to somewhere</Card.Title>
                        <Card.Text>
                            Trip to somewhere details are added from here please edit the content dynamically.Thank you.
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default EventCard;