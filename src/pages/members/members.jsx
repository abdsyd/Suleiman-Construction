import Card from 'react-bootstrap/Card';
import profilePic from './card_pic.png';
import { BiPhoneCall } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa6";
import './members.css'


export default function Members() {
    return (
        <div className='members'>
            <h1>الوكلاء</h1>
            <div className="container">
                <div className="row g-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                            <Card>
                                <Card.Img src={profilePic} />
                                <Card.Body>
                                    <Card.Title className="fw-bold fs-4 pb-4">عهد سليمان</Card.Title>
                                    <Card.Text>
                                        <FaUserTie />الرئيس التنفيذي
                                    </Card.Text>
                                    <Card.Text>
                                        <BiPhoneCall /><div className='ltr'>+963 996 840 955</div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
