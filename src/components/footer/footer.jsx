
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './footer.css'

export default function Footer() {
    return (
        <footer className="text-center mt-auto">
        <div className="container p-2">
            <div>
                <a href="#" className="mx-3">
                    <FaFacebookF />
                </a>
                <a href="#" className="mx-3">
                    <FaTwitter />
                </a>
                <a href="#" className="mx-3">
                    <FaInstagram />
                </a>
                <a href="#" className="mx-3">
                    <FaLinkedin />
                </a>
            </div>
            <div className="footer-text">جميع الحقوق محفوظة لصالح شركة سليمان  &copy; 2025</div>
            <div>
                <ul className="list-inline">
                    <li className="list-inline-item footer-links">
                        <a href="#" className="text-decoration-none">
                        سياسة الخصوصية
                        </a>
                    </li>
                    <span className="p-1">|</span>
                    <li className="list-inline-item footer-links">
                        <a href="#" className="text-decoration-none">
                        شروط الخدمة
                        </a>
                    </li>
                    <span className="p-1">|</span>
                    <li className="list-inline-item footer-links">
                        <a href="#" className="text-decoration-none">
                        اتصل بنا
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    
    );
}
