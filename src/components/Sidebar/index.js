import React from "react";
import Card from "../UI/Card";
import "./style.css";
const Sidebar = (props) => {
  return (
    <div className="sidebarContainer">
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileimageContainer">
          <img
            src="https://futureoflife.org/wp-content/uploads/2020/11/shutterstock_687175351-1.jpg?x96845"
            alt=""
          />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            My name is Hiwot I am a software developer ...
          </p>
        </div>
      </Card>

      <Card>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
