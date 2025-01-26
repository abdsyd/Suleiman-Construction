import './sidebar.css';
import logo from './logo.png';
import { FaHome, FaPhone } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { RxQuestionMark } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className={` d-none d-md-block sidebar active`}>
            <img src={logo} alt="Logo" className="logo" />
            <ul>
                <Link to="/" className='text-decoration-none' >
                    <li>
                        <FaHome /> الرئيسة
                    </li>
                </Link>
                <Link to="/products" className='text-decoration-none'  >
                    <li>
                        <AiFillProduct />خدماتنا
                    </li>
                </Link>
                <Link to="/members" className='text-decoration-none' >
                    <li>
                        <IoIosPeople /> الوكلاء
                    </li>
                </Link>
                <Link to="/faqs" className='text-decoration-none' >
                    <li>
                        <RxQuestionMark />الأسئلة الشائعة
                    </li>
                </Link>
                <Link to="/contact" className='text-decoration-none' >
                    <li>
                        <FaPhone /> اتصل بنا
                    </li>
                </Link>
            </ul>

        </div>
    );
}

