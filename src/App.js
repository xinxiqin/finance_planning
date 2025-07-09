import './App.css';
import RetireAt59AndHalf from "./RetireAt59.5.js";
import React, { useState } from "react";

const menuData = {
  Health: {
    Exercise: ["Cardio", "Strength"],
    Nutrition: ["Vitamins", "Hydration"],
  },
  Wealth: {
    Investing: ["Stocks", "Bonds"],
    Saving: ["Emergency", "Retirement"],
  },
  Retirement: {
    59.5: ["r1", "r2"],
    Calculator: ["r3", "r4"],
  },
};

function App() {
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedContent, setSelectedContent] = useState("Select a menu item");

  const toggleCategory = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  const handleSelect = (category, sub, item) => {
    setSelectedContent(`${category} > ${sub} > ${item}`);
    setOpenCategory(null); // close menu after selecting
  };

  return (
    <div className="app">
      <div className="menu-bar">
        {Object.entries(menuData).map(([category, submenus]) => (
          <div className="dropdown" key={category}>
            <button className="dropbtn" onClick={() => toggleCategory(category)}>
              {category}
            </button>
            {openCategory === category && (
              <div className="dropdown-content">
                {Object.entries(submenus).map(([sub, items]) => (
                  <div className="sub-dropdown" key={sub}>
                    <div className="sub-title">{sub}</div>
                    <ul>
                      {items.map((item) => (
                        <li
                          key={item}
                          onClick={() => handleSelect(category, sub, item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="content">
        <h2>Content</h2>
        <p>{selectedContent}</p>
        <div style={{ height: "1500px" }}>
          <p>Scroll for content</p>
          <RetireAt59AndHalf />
        </div>
      </div>
    </div>
  );
};


export default App;
