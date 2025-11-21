import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const DynamicButton = ({ text, to, scrollTo, onClick, className = "" }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (to) {
      navigate(to);
    }
  };

  if (scrollTo) {
    return (
      <ScrollLink
        to={scrollTo}
        smooth={true}
        duration={800}
        offset={-100}
        className={`group inline-flex items-center px-6 py-3 font-semibold text-sm clip-btn bg-[#16a3e6] font-serif cursor-pointer text-white hover:bg-[#04558c] transition ${className}`}
        onClick={onClick}
      >
        {text}
        <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </ScrollLink>
    );
  }

  return (
    <button
      onClick={(e) => {
        if (onClick) onClick(e);
        handleNavigate();
      }}
      className={` quote-btn font-new group inline-flex items-center transition ${className}`}
    >
      {text}
      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
    </button>
  );
};

export default DynamicButton;
