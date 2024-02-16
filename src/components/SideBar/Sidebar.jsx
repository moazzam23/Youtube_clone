import React, { useState } from "react";
import "./Sidebar.css";
import { useSidebar } from "../../Context/Sidebar";
import items from "../../Data/Sidebar.json";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const { isOpen } = useSidebar();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        {items.data.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              <i className="material-icons">{item.icon}</i> {item.title}
            </a>
          </li>
        ))}
      </ul>
      <hr className="line" />
      <ul>
        <h4
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "black",
            padding: "5px 5px ",
          }}
        >
          You <ArrowForwardIosIcon />{" "}
        </h4>
        {items.data2.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              <i className="material-icons">{item.icon}</i> {item.title}
            </a>
          </li>
        ))}
        <li onClick={toggleShowMore}>
          <h4
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "black",
              paddingTop: "-60px",
            }}
          >
            Show More{" "}
            {showMore ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </h4>
        </li>
        {showMore &&
          items.data4.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                <i className="material-icons">{item.icon}</i> {item.title}
              </a>
            </li>
          ))}
      </ul>
      <hr />
      <ul>
        <h4
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "black",
          }}
        >
          Subscriptions{" "}
        </h4>
        {items.data3.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              <i className="material-icons">{item.icon}</i> {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
