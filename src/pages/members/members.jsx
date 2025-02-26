import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import profilePic from "./card_pic.png";
import { BiPhoneCall } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa6";
import "./members.css";
import AOS from "aos";
import "aos/dist/aos.css";

const members = [
  {
    id: 1,
    name: "عهد سليمان",
    title: "الرئيس التنفيذي",
    phone: "+963 996 840 955",
  },
  {
    id: 2,
    name: "أحمد محمد",
    title: "مدير المبيعات",
    phone: "+963 999 123 456",
  },
  {
    id: 3,
    name: "سارة علي",
    title: "مديرة التسويق",
    phone: "+963 991 789 654",
  },
  {
    id: 4,
    name: "يوسف عبد الله",
    title: "مدير العمليات",
    phone: "+963 992 456 789",
  },
  {
    id: 5,
    name: "فاطمة يوسف",
    title: "مديرة الموارد البشرية",
    phone: "+963 993 654 321",
  },
  {
    id: 6,
    name: "محمد خالد",
    title: "المدير الفني",
    phone: "+963 994 321 987",
  },
];

export default function Members() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with 1 second duration and animation happens only once
  }, []);

  return (
    <div className="members">
      <h1>الوكلاء</h1>
      <div className="container">
        <div className="row g-4">
          {members.map((member, index) => (
            <div
              key={member.id}
              className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
              data-aos="fade-up" // Fade-in animation
              data-aos-delay={index * 200} // Apply increasing delay for each card
            >
              <Card>
                <Card.Img src={profilePic} />
                <Card.Body>
                  <Card.Title className="fw-bold fs-4 pb-4">
                    {member.name}
                  </Card.Title>
                  <Card.Text>
                    <FaUserTie />
                    {member.title}
                  </Card.Text>
                  <Card.Text>
                    <BiPhoneCall />
                    <div className="ltr">{member.phone}</div>
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
