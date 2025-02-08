import section1 from './section1.png'
import section2 from './section2.png'
import hero from './hero.jpg'
import './home.css'

export default function Home() {
    return (
        <div className='home'>
            <div className="hero-section d-flex align-items-center text-white text-center">
                <div className="container">
                    <h1 className="display-4 fw-bold">Welcome to Our Platform</h1>
                    <p className="lead">
                        Elevate your experience with insights, innovation, and inspiration.
                    </p>
                    <button className="btn btn-light btn-lg mt-3 hero-btn">Get Started</button>
                </div>
            </div>
            <div className="py-5 ">

                {/* First Section */}
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <h2 className="fw-bold">Engaging Title</h2>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus repellat repellendus doloremque voluptates iure sunt earum explicabo voluptatem quas, enim suscipit tenetur corrupti odio?
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <img src={section1} alt="Descriptive Alt" className="img-fluid  " />
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="container mt-5">
                    <div className="row align-items-center g-5 flex-lg-row-reverse">
                        <div className="col-lg-5">
                            <h2 className="fw-bold ">Another Title</h2>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus repellat repellendus doloremque voluptates iure sunt earum explicabo voluptatem quas, enim suscipit tenetur corrupti odio?
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <img src={section2} alt="Descriptive Alt" className="img-fluid" />
                        </div>
                    </div>
                </div>
                {/* Third Section */}
                <div className="container mt-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <h2 className="fw-bold ">Final Section</h2>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus repellat repellendus doloremque voluptates iure sunt earum explicabo voluptatem quas, enim suscipit tenetur corrupti odio?
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <img src={section2} alt="Descriptive Alt" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
