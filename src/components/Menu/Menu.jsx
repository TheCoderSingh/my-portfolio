import { useState } from "react";
import "./Menu.scss";

const Menu = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className="navbar">
        <p>JS</p>
        <div
          className={`menu ${isActive ? "open" : null}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className="menu-items"
        style={{ display: isActive ? "block" : "none" }}
      >
        <div className="menu-item">Home</div>
        <div className="menu-item">Projects</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Skills</div>
        <div className="menu-item">Contact</div>
      </div>
    </div>
  );
};

export default Menu;
