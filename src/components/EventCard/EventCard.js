import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import image from './4.jpg';

class EventCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={image} />
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