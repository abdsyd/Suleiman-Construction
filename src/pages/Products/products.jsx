import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import productPic from './metal.png';
import vehicle from './vehicle.png';
import './products.css';

export default function Products() {
    return (
        <div className='products'>
            <h1>خدماتنا</h1>
            <Container>
                <Row>
                    <Col xs={12}>
                        <p>مواد بناء</p>
                    </Col>
                </Row>
                <Row>
                    {[...Array(6)].map((_, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                            <Card>
                                <Card.Img src={productPic} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col xs={12}>
                        <p>نقل</p>
                    </Col>
                </Row>
                <Row className='m-4'>
                    {[...Array(4)].map((_, index) => (
                        <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-4  d-flex justify-content-center">
                            <Card>
                                <Card.Img src={vehicle} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
