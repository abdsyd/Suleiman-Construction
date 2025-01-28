import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { BiPhoneCall } from "react-icons/bi";
import { TiMail } from "react-icons/ti";

import "./contact_us.css"

export default function ContactUs() {
    return (
        <>
        <div className="contact-info">
            <p>
                <TbDeviceLandlinePhone /><div className='ltr'>+1234567890</div>
            </p>
            <p>
                <BiPhoneCall /><div className='ltr'>+1234567890</div>
            </p>
            <p>
                <TiMail /> example@example.com
            </p>
        </div>
        <Card className='main-container'>
            <Card.Body>
                <Card.Title className='title'>تواصل معنا</Card.Title>
                <div className='Container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label={<><span className="text-danger">*</span> الاسم</>}
                                className="mb-3"
                            >
                                <Form.Control type="text" required />
                            </FloatingLabel>
                        </div>
                        <div className='col-lg-6'>
                            <FloatingLabel controlId="floatingPassword" label={<><span className="text-danger">*</span> الكنية</>}>
                                <Form.Control type="text" required  />
                            </FloatingLabel>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-6'>
                            <FloatingLabel controlId="floatingPassword" label={<><span className="text-danger">*</span> رقم الهاتف</>}>
                                <Form.Control type="tel" required  />
                            </FloatingLabel>
                        </div>
                        <div className='col-lg-6'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label=" البريد الإلكتروني"
                                className="mb-3"
                            >
                                <Form.Control type="email" />
                            </FloatingLabel>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-12'>
                            <FloatingLabel controlId="floatingTextarea2" label={<><span className='text-danger'>*</span>رسالتك هنا</>}>
                                <Form.Control
                                    as="textarea"
                                    className='textarea-form'
                                    required 
                                />
                            </FloatingLabel>
                        </div>
                    </div>
                    <Button type="submit" className='submit-btn' size='lg'>
                        ارسال
                    </Button>
                </div>
            </Card.Body>
        </Card>
        </>
    );
}
