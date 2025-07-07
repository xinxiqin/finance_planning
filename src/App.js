import './App.css';
import React, { useState } from "react";

function App() {
    const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "tax":
        return (
          <div>
            <p>Tax Gain Harvest</p>
            <p>Retirement Account Withdraw Optimization</p>
          </div>
        );
      case "housing":
        return <div>
          <p>Housing Market Analysis</p>
          <p>Mortgage Rate Trends</p>
        </div>;
      case "car":
        return <div>
          <p>Car Loan Interest Rates</p>
          <p>Electric Vehicle Incentives</p>
        </div>;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <h1>Finance Planning Topics</h1>
      <div style={styles.tabBar}>
        <button
          onClick={() => setActiveTab("tax")}
          style={activeTab === "tax" ? styles.activeTab : styles.tab}
        >
          Tax
        </button>
        <button
          onClick={() => setActiveTab("housing")}
          style={activeTab === "housing" ? styles.activeTab : styles.tab}
        >
          Housing
        </button>
        <button
          onClick={() => setActiveTab("car")}
          style={activeTab === "car" ? styles.activeTab : styles.tab}
        >
          Car
        </button>
      </div>
      <div style={styles.content}>{renderContent()}</div>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "50px auto",
    maxWidth: "600px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  tabBar: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
    border: "none",
    borderRadius: "4px",
  },
  activeTab: {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
  },
  content: {
    padding: "10px",
    backgroundColor: "#fafafa",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
};

export default App;
