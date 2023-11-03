import { NavLink } from "react-router-dom";
import logo from "../../../assets/beach-logo-vector-template_497289-578.avif";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content grid grid-cols-2 gap-10 md:grid-cols-4">
      <aside>
        <NavLink to="/" className="text-3xl text-black font-bold">
          <img className="w-16 h-16 rounded-full" src={logo} alt="" />
          <h3 className="text-2xl font-bold text-white">Travellogo</h3>
        </NavLink>
        <p>Providing reliable tour for you</p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
