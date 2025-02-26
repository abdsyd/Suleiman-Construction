import section1 from "./section1.png";
import section2 from "./section2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="home">
      <div className="hero-section d-flex align-items-center text-white text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">
            مرحبًا بكم في عالم البناء المتكامل!
          </h1>
          <p className="lead">
            نقدم لكم أفضل مواد البناء من حديد وحجر وغيرها، بجودة عالية وأسعار
            تنافسية. نسعى لتكونوا شركاءنا في بناء مستقبل متين
          </p>
          <Link to="/contact" className="btn btn-light btn-lg mt-3 hero-btn">
            للتواصل اضغط هنا
          </Link>
        </div>
      </div>
      <div className="py-5 ">
        {/* First Section */}
        <div className="container" data-aos="fade-up">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 ">
              <h2 className="fw-bold px-4">العنوان الاول</h2>
              <p className="text-muted px-4">
                بالعمل الإنذار، ثم ك عل يتم اعلان أطراف ارتكبها. ثم بعض نتيجة
                القادة مع إعلان بالفشل الثقيلة غير. بلا العسكري الإقتصادي قد,
                عدد ما إختار الأخذ. تحرير حادثة .{" "}
              </p>
            </div>
            <div className="col-lg-7">
              <img
                src={section1}
                alt="Descriptive Alt"
                className="img-fluid  "
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="container mt-5" data-aos="fade-up">
          <div className="row align-items-center g-5 flex-lg-row-reverse">
            <div className="col-lg-5">
              <h2 className="fw-bold px-4">العنوان الثاني</h2>
              <p className="text-muted px-4">
                بالعمل الإنذار، ثم ك عل يتم اعلان أطراف ارتكبها. ثم بعض نتيجة
                القادة مع إعلان بالفشل الثقيلة غير. بلا العسكري الإقتصادي قد,
                عدد ما إختار الأخذ. تحرير حادثة .{" "}
              </p>
            </div>
            <div className="col-lg-7">
              <img src={section2} alt="Descriptive Alt" className="img-fluid" />
            </div>
          </div>
        </div>
        {/* Third Section */}
        <div className="container mt-5" data-aos="fade-up">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <h2 className="fw-bold px-4">العنوان الثالت</h2>
              <p className="text-muted px-4">
                بالعمل الإنذار، ثم ك عل يتم اعلان أطراف ارتكبها. ثم بعض نتيجة
                القادة مع إعلان بالفشل الثقيلة غير. بلا العسكري الإقتصادي قد,
                عدد ما إختار الأخذ. تحرير حادثة .{" "}
              </p>
            </div>
            <div className="col-lg-7">
              <img src={section1} alt="Descriptive Alt" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
