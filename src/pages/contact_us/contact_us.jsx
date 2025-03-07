import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { BiPhoneCall } from "react-icons/bi";
import { TiMail } from "react-icons/ti";
import "./contact_us.css";
import { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);
  return (
    <>
      <div className="contact-info" data-aos="fade-down">
        <p data-aos="fade-down" data-aos-delay="100">
          <TbDeviceLandlinePhone />
          <div className="ltr">+1234567890</div>
        </p>
        <p data-aos="fade-down" data-aos-delay="200">
          <BiPhoneCall />
          <div className="ltr">+1234567890</div>
        </p>
        <p data-aos="fade-down" data-aos-delay="300">
          <TiMail />
          example@example.com
        </p>
      </div>
      <Card className="main-container">
        <Card.Body>
          <Card.Title className="title">تواصل معنا</Card.Title>
          <div className="Container">
            <div className="row">
              <div className="col-lg-6">
                <FloatingLabel
                  controlId="floatingInput"
                  label={
                    <>
                      <span className="text-danger">*</span> الاسم
                    </>
                  }
                  className="mb-3"
                >
                  <Form.Control type="text" required />
                </FloatingLabel>
              </div>
              <div className="col-lg-6">
                <FloatingLabel
                  controlId="floatingPassword"
                  label={
                    <>
                      <span className="text-danger">*</span> الكنية
                    </>
                  }
                >
                  <Form.Control type="text" required />
                </FloatingLabel>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6">
                <FloatingLabel
                  controlId="floatingPassword"
                  label={
                    <>
                      <span className="text-danger">*</span> رقم الهاتف
                    </>
                  }
                  className="mb-3"
                >
                  <Form.Control type="tel" required />
                </FloatingLabel>
              </div>
              <div className="col-lg-6">
                <FloatingLabel
                  controlId="floatingInput"
                  label=" البريد الإلكتروني"
                  className="mb-3"
                >
                  <Form.Control type="email" />
                </FloatingLabel>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-12">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label={
                    <>
                      <span className="text-danger">*</span>رسالتك هنا
                    </>
                  }
                >
                  <Form.Control
                    as="textarea"
                    className="textarea-form"
                    required
                  />
                </FloatingLabel>
              </div>
            </div>
            <Button type="submit" className="submit-btn" size="lg">
              ارسال
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
