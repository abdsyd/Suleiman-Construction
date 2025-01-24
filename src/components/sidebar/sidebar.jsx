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
                <li>
                    <Link to="/" >
                        <FaHome /> الرئيسة
                    </Link>
                </li>
                <li>
                    <Link to="/products" >
                        <AiFillProduct /> منتجاتنا
                    </Link>
                </li>
                <li>
                    <Link to="/members" >
                        <IoIosPeople /> الوكلاء
                    </Link>
                </li>
                <li>
                    <Link to="/faqs" >
                        <RxQuestionMark/>الأسئلة الشائعة 
                    </Link>
                </li>
                <li>
                    <Link to="/contact" >
                        <FaPhone /> اتصل بنا
                    </Link>
                </li>
            </ul>
           
        </div>
    );
}

