import './navbar.css'
import { Navbar, Nav, Container } from "react-bootstrap";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import minilogo from "./mini-logo.png"


export default function MobileNavBar() {
    return (
        <Navbar variant="dark" expand="md" className="d-md-none d-flex justify-content-between align-items-center ps-3 pe-3">
           
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <GiHamburgerMenu style={{ color: "white" }} />
                </Navbar.Toggle>

                <Navbar.Brand href="#">
                    <img
                        src={minilogo}
                        alt="Logo"
                        style={{ height: "50px" }}
                    />
                </Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/' className='link'> الرئيسة </Link>
                        <Link to='/products' className='link'>منتجاتنا</Link>
                        <Link to='/members' className='link'>الوكلاء</Link>
                        <Link to='/faqs' className='link'>الأسئلة الشائعة</Link>
                        <Link to='/contact' className='link'>اتصل بنا</Link>
                    </Nav>
                </Navbar.Collapse>
            
        </Navbar>
    );
}
