import './App.css';
import React, { useState } from "react";

const menuData = [
  {
    title: "Health",
    submenus: [
      {
        title: "Exercise",
        items: [
          { label: "Cardio", content: "🏃 Do cardio 3–5 times/week." },
          { label: "Strength", content: "🏋️ Lift weights for muscle." },
        ],
      },
      {
        title: "Nutrition",
        items: [
          { label: "Vitamins", content: "🍎 Eat a variety of fruits & veggies." },
          { label: "Hydration", content: "💧 Drink enough water daily." },
        ],
      },
    ],
  },
  {
    title: "Wealth",
    submenus: [
      {
        title: "Investing",
        items: [
          { label: "Stocks", content: "📈 Long-term growth with equity." },
          { label: "Bonds", content: "📊 Stability with fixed income." },
        ],
      },
      {
        title: "Saving",
        items: [
          { label: "Emergency Fund", content: 
            "<p>Save 3–6 months of expenses.</p> \n<p> Build a financial cushion. </p>" },

          { label: "Retirement", content: "🏖️ Max your Roth IRA and 401(k)." },
        ],
      },
    ],
  },
];

function App() {
 const [selectedContent, setSelectedContent] = useState("Please select a topic.");

  return (
    <div className="app-container">
      <div className="sidebar">
        {menuData.map((category) => (
          <div key={category.title} className="menu-category">
            <h3>{category.title}</h3>
            {category.submenus.map((submenu) => (
              <div key={submenu.title} className="submenu-group">
                <strong>{submenu.title}</strong>
                <ul>
                  {submenu.items.map((item) => (
                    <li key={item.label}>
                      <button onClick={() => setSelectedContent(item.content)}>
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="content">
        <h2>Content</h2>
        <p>{selectedContent}</p>
      </div>
    </div>
  );
};


export default App;
