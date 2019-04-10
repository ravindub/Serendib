import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Post extends Component {
    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col xs></Col>
                    <Col xs={{ order: 12 }}> </Col>
                    <Col xs={{ order: 1 }}></Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Post;