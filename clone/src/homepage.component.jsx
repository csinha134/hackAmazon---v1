import React, { useEffect } from "react";
import "./styles.css";
import ChatBot from "../src/ChatBot/ChatBot";
import amazonLogo from "../src/assets/green.png"; // Replace with your Amazon logo image

const Homepage = () => {
  useEffect(() => {
    document.title = "Amazon";
  }, []);

  return (
    <div className="background-image">
      <div className="homepage-container">
        <img src={amazonLogo} alt="Amazon Logo" className="amazon-logo" style={{ width: "400px", height: "400px" }} />
        <h1 className="homepage-title">Welcome to Amazon</h1>
        <p className="homepage-description">Your one-stop shop for all your shopping needs.</p>
        <div className="hompage-button-container">
          <ChatBot
            tryName="Try Amazon's New Search Assistant"
            name="Amazon's Search Assistant"
            apiUrl="/api/query/"
            initialMessages={[
              { role: "assistant", message: "Hi! I'm EcoChatter" },
              { role: "assistant", message: "What do you wanna buy today?" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
