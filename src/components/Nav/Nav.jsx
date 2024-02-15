import React, { useRef, useState } from 'react';
import data from "../../Data/Nav.json";
import "./Nav.css";

const Nav = () => {
  const navbarContainerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - navbarContainerRef.current.offsetLeft);
    setScrollLeft(navbarContainerRef.current.scrollLeft);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - navbarContainerRef.current.offsetLeft;
    const walk = (x - startX) * 7; // Adjust the multiplier as needed for smoother scrolling
    navbarContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div
      className="navbar-container"
      ref={navbarContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <nav className='navbar'>
        {data.data.title.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
