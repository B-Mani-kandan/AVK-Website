import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const DynamicButton = ({ text, to, onClick, className = "" }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`group inline-flex items-center px-6 py-3 font-semibold text-sm clip-btn bg-[#16a3e6] font-serif cursor-pointer text-white hover:bg-[#04558c] transition ${className}`}
    >
      {text}
      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
    </button>
  );
};

export default DynamicButton;
