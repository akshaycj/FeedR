import React, { Component } from "react";
import logo from "../Res/ant.svg";
import Feeds from "./Feeds";
import { Button } from "antd";


class Home extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            boxShadow: "3px 3px 3px 2px rgba(0, 0, 0, .2)",
            height: 60,
            display: "flex",
            justifyContent: "space-between"
          }}
        >
        <div style={{ display: "flex", marginLeft: 10, alignSelf: "center" }}>
            <img src={logo} height="35" />
            <div style={{ alignSelf: "center", marginLeft: 10 ,}}>
              <b>FeedeR</b>
            </div>
          </div>
          <div />
        </div>

        <div style={{ padding: 10, margin: 20 }}>
          <div style={{ textAlign: "center" }}>
            <h3>Recents:</h3>
            <hr style={{ width: 20, height: 0, color: "blue" }} />
          </div>
          <Feeds />
        </div>
      </div>
    );
  }
}

export default Home;
