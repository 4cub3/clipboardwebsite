import logo from "../../store/images/logo.svg";
import facebook from '../../store/images/icon-facebook.svg';
import twitter from '../../store/images/icon-twitter.svg';
import instagram from '../../store/images/icon-instagram.svg';
const Footer = () => {
  return (
    <section className="section-container mt-40 space-y-20 md:space-y-0 flex flex-col md:flex-row items-center justify-between p-20">
      <figure className="w-20 h-20">
        <img src={logo} alt="logo" className="w-full" />
      </figure>
      <div className="flex flex-col md:flex-row justify-between space-y-20 md:space-y-0 w-3/4">
        <ul className="list-none md:text-left">
          <li className="cursor-pointer hover:text-strongCyan transition-all duration-300">FAQs</li>
          <li className="cursor-pointer hover:text-strongCyan transition-all duration-300">Contact Us</li>
        </ul>
        <ul className="list-none md:text-left">
          <li className="cursor-pointer hover:text-strongCyan transition-all duration-300">Privacy Policy</li>
          <li className="cursor-pointer hover:text-strongCyan transition-all duration-300">Press Kit</li>
        </ul>
        <ul className="list-none md:text-left">
          <li className="cursor-pointer hover:text-strongCyan transition-all duration-300">Install Guide</li>
        </ul>

        <div className="flex flex-row self-center md:w-[15%] w-1/2 justify-between">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Footer;
