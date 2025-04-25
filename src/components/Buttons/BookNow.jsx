import React from "react";

const BookNowButton = ({
  onClick,
  children,
  width = "auto",
  paddingX = "1.85rem",
  paddingY = "0.55rem",
  fontSize = "18px",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "var(--color-booknowbtn)",
        width,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        fontSize,
      }}
      className={`text-textbooknowbtn cursor-pointer  transition duration-300 ${className}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-hoverbooknowbtn)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-booknowbtn)";
      }}
    >
      {children || "Book Now"}
    </button>
  );
};

export default BookNowButton;
