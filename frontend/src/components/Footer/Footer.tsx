import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className=" text-mainText px-4 py-8 flex flex-col  justify-between items-center gap-6">
      <div className="flex items-center">
        <Link to="/" className="text-3xl font-bold ">Wecode Malayalam</Link>
      </div>
      <nav className="mt-4 sm:mt-0 flex  space-x-4">
        <a href="/#about" className="hover:text-secondaryClr">About Us</a>
        <a href="/#contact" className="hover:text-secondaryClr">Contact</a>
        <a href="#privacy" className="hover:text-secondaryClr">Privacy & Policy</a>
        <a href="#terms" className="hover:text-secondaryClr">Terms & Services</a>
      </nav>
      <div className="mt-4 sm:mt-0 flex flex-nowrap space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          
          className="text-secondaryClr hover:text-primaryClr text-2xl"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          
          className="text-secondaryClr hover:text-primaryClr text-2xl"
        >
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          
          className="text-secondaryClr hover:text-primaryClr text-2xl"
        >
         <FontAwesomeIcon icon={faInstagram} />
         
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          
          className="text-secondaryClr hover:text-primaryClr text-2xl"
        >
        
         <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div className="mt-4 sm:mt-0 text-center sm:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Wecode Malayalam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;