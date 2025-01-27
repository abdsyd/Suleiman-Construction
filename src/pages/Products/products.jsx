import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import productPic from './metal.png';
import vehicle from './vehicle.png';
import { AiFillProduct } from "react-icons/ai";
import './products.css';

export default function Products() {
    return (
        <div className='products'>
            <h1>خدماتنا</h1>
                <div className='p-4'>
                <Row>
                    <Col xs={12}>
                        <p><AiFillProduct />مواد بناء</p>
                    </Col>
                </Row>
                <Row>
                    {[...Array(6)].map((_, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center">
                            <Card>
                                <Card.Img src={productPic} />
                                <Card.Body>
                                    <Card.Title>
                                        <span>عنوان</span>
                                        <span>$99.99</span>
                                    </Card.Title>
                                    <Card.Text>افضل منتج في العالم</Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col xs={12}>
                        <p><AiFillProduct />نقل</p>
                    </Col>
                </Row>
                <Row>
                    {[...Array(4)].map((_, index) => (
                        <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-5 pb-5  d-flex justify-content-center">
                            <Card>
                                <Card.Img src={vehicle} />
                                <Card.Body>
                                    <Card.Title>
                                        <span>عنوان</span>
                                        <span>$99.99</span>
                                    </Card.Title>
                                    <Card.Text>افضل منتج في العالم</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                </div>
        </div>
    );
}
