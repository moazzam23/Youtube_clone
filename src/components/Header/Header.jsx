import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillAudio, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import './Header.css';
import { useSidebar } from '../../Context/Sidebar';
import items from '../../Data/Sidebar.json';

const Header = () => {
  const { toggleSidebar } = useSidebar();
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="header">
        <div className="start">
          <GiHamburgerMenu onClick={toggleSidebar} />
          <img src="./assets/youtube.png" alt="youtube" />
        </div>
        <div className="middle">
          <div className="middle2">
            <input type="text" placeholder="Search" />
            <FaSearch className="middleicon" />
          </div>
          <AiFillAudio className="middleicon2" />
        </div>
        <div className="end" style={{ position: 'relative' }}>
          <AiOutlineVideoCameraAdd />
          <BsBell />
          <div style={{ position: 'relative' }}>
            <CgProfile onClick={toggleShowMore} />
            {showMore && (
              <div className="submenu">
                <ul>
                  {items.data5.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>
                        <i className="material-icons">{item.icon}</i> {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <hr className="line" />
                <ul>
                  {items.data6.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>
                        <i className="material-icons">{item.icon}</i> {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <hr className="line" />
                <ul>
                  {items.data7.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>
                        <i className="material-icons">{item.icon}</i> {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <hr className="line" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
