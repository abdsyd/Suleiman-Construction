import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import productPic from "./metal.png";
import vehicle from "./vehicle.png";
import { AiFillProduct } from "react-icons/ai";
import "./products.css";
import AOS from "aos";
import "aos/dist/aos.css";

const buildingMaterials = [
  { id: "mat-1", title: "عنوان", price: "$99.99", img: productPic },
  { id: "mat-2", title: "عنوان", price: "$99.99", img: productPic },
  { id: "mat-3", title: "عنوان", price: "$99.99", img: productPic },
  { id: "mat-4", title: "عنوان", price: "$99.99", img: productPic },
  { id: "mat-5", title: "عنوان", price: "$99.99", img: productPic },
  { id: "mat-6", title: "عنوان", price: "$99.99", img: productPic },
];

const transportServices = [
  { id: "trans-1", title: "عنوان", price: "$99.99", img: vehicle },
  { id: "trans-2", title: "عنوان", price: "$99.99", img: vehicle },
  { id: "trans-3", title: "عنوان", price: "$99.99", img: vehicle },
  { id: "trans-4", title: "عنوان", price: "$99.99", img: vehicle },
];

export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="products">
      <h1>خدماتنا</h1>
      <div className="p-4">
        {/* مواد بناء */}
        <Row>
          <Col xs={12}>
            <p>
              <AiFillProduct /> مواد بناء
            </p>
          </Col>
        </Row>
        <Row>
          {buildingMaterials.map((item, index) => (
            <Col
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4"
              data-aos="fade-up" // Apply fade-up animation
              data-aos-delay={index * 200} // Apply a delay for each card
            >
              <Card>
                <Card.Img src={item.img} />
                <Card.Body>
                  <Card.Title>
                    <span>{item.title}</span>
                    <span className="price">{item.price}</span>
                  </Card.Title>
                  <Card.Text>افضل منتج في العالم</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* نقل */}
        <Row>
          <Col xs={12}>
            <p>
              <AiFillProduct /> نقل
            </p>
          </Col>
        </Row>
        <Row>
          {transportServices.map((item, index) => (
            <Col
              key={item.id}
              xs={12}
              sm={6}
              md={6}
              lg={3}
              className="mb-4"
              data-aos="fade-up" // Apply fade-up animation
              data-aos-delay={index * 200} // Apply a delay for each card
            >
              <Card>
                <Card.Img src={item.img} />
                <Card.Body>
                  <Card.Title>
                    <span>{item.title}</span>
                    <span className="price">{item.price}</span>
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
