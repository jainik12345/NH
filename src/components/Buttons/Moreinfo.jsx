import React from "react";

const MoreInfoButton = ({ text = "More Info", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full cursor-pointer max-w-xs py-2 uppercase px-6 text-[16px]   text-textmoreinfobtn bg-moreinfobtn hover:bg-hovermoreinfobtn   transition-all duration-600"
    >
      {text}
    </button>
  );
};

export default MoreInfoButton;
