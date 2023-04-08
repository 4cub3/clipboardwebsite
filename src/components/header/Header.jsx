import logo from "../../store/images/logo.svg";
import Button from "../../shared/button/Button";
const Header = () => {
  return (
    
      <section className="section-container space-y-20 mt-60">
        <img src={logo} alt="logo" className=" mx-auto" />
        <h1 className=" text-7xl font-semibold text-gray-600 font-sans">
          A history of everything you copy
        </h1>
        <p className="section-content text-4xl text-gray-400 leading-normal">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-8 items-center justify-center">
          <Button className="bg-strongCyan text-3xl text-white w-full md:w-3/12 rounded-full shadow-lg hover:bg-cyan-400 transition-all duration-300">Download for IOS</Button>
          <Button className="bg-blue-500 text-3xl text-white w-full md:w-3/12 rounded-full shadow-lg hover:bg-blue-400 transition-all duration-300">Downlod for Mac</Button>
        </div>
      </section>
    
  );
};
export default Header;
