import './App.css';
import menuData from "./menuData.js"; 
import Content from "./Content.js";
import React, { useState } from "react";


function App() {
  const [content, setContent] = useState("Please select an item.");

  const handleClick = (text) => {
    setContent(text);
  };

  return (
    <div>
      <nav className="top-menu">
        {Object.entries(menuData).map(([level1, level2]) => (
          <div className="dropdown" key={level1}>
            <button className="dropbtn">{level1}</button>
            <div className="dropdown-content">
              {Object.entries(level2).map(([level2Key, level3]) => (
                <div className="sub-dropdown" key={level2Key}>
                  <span className="sub-label">{level2Key} ▸</span>
                  <div className="sub-dropdown-content">
                    {Object.entries(level3).map(([item, description]) => (
                      <div
                        key={item}
                        className="item"
                        onClick={() => handleClick(description)}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <main className="content">
        <p>{content}</p>
        <Content name = {content} />
      </main>
    </div>
  );
}

export default App;
