
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import menuData from "./menuData.jsx"; 
import Content from "./Content.jsx";
import React, { useState } from "react";
// import Introduction from './Introduction.jsx';
// import SSClaimCalculator from './SSClaimCalculator.jsx';


function App() {
  const [content, setContent] = useState("Introduction");

  const handleClick = (text) => {
    setContent(text);
  };

  return (
    
    <div>
      {/* <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/Retirement/Calculator/SS Claim" element={<SSClaimCalculator />} />
      </Routes>
      </Router> */}
      <nav className="top-menu">
        {Object.entries(menuData).map(([level1, level2]) => {
          if (level1 === "Home") {
            return (
              <div className="dropdown" key={level1} onClick={() => handleClick(level2)}>
                <button className="dropbtn">{level1}</button>
              </div>
            );
          }
          return (
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
          );
        })}
      </nav>

      <main className="content">
        <Content name = {content} /> 
      </main>
    </div>
  );
}

export default App;
