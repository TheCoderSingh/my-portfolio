import { useState } from "react";
import "./Menu.scss";

const Menu = () => {
  const [isActive, setActive] = useState("false");

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className={`menu ${!isActive ? "open" : null}`} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Menu;
