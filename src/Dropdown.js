import React, { useState } from "react";
import "./dropdown.css";
const Dropdown = ({ items }) => {
  const [hoverOn, setHoverOn] = useState(false);
  const [value, setValue] = useState("Select");
  function MouseOver(event) {
    setHoverOn(true);
  }
  function MouseOut(event) {
    setHoverOn(false);
  }
  return (
    <div className="container">
      <div className="dropdownContainer">
        <h3> Should you use a dropdown? </h3>
        <div class="dropdown" onMouseOver={MouseOver} onMouseOut={MouseOut}>
          <button class="dropbtn">
            {value}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
          {hoverOn ? (
            <div className="items">
              <ul>
                {items.map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setHoverOn(false);
                      setValue(item);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
