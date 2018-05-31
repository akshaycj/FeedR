import React, { Component } from "react";
import logo from "../Res/ant.svg";
import Feeds from "./Feeds";
import { Button,Radio } from "antd";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Home extends Component {
  constructor(props){
    super(props)

    this.state ={
      sort:''
    }
  }

  onSort = (e) =>{this.setState({sort:e.target.value})}


  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            boxShadow: "3px 3px 3px 2px rgba(0, 0, 0, .2)",
            height: 60,
            display: "flex",
            justifyContent: "space-between",

          }}
        >
          <div style={{ display: "flex", marginLeft: 10, alignSelf: "center" }}>
            <img src={logo} height="35" />
            <div style={{ alignSelf: "center", marginLeft: 10 ,}}>
              <b>FeedeR</b>
            </div>
          </div>
          <div style={{ display: "flex", marginRight: 10, alignSelf: "center" }}>
            <div style={{ alignSelf: "center", marginRight: 10 ,}}>
              Sort By:
            </div>  
            <RadioGroup defaultValue="a" size="small" onChange={this.onSort} >
              <RadioButton value="a">Created</RadioButton>
              <RadioButton value="b">Up Votes</RadioButton>
            </RadioGroup>
          </div>
        </div>

        <div style={{ padding: 10, margin: 20 }}>
          <div style={{ textAlign: "center" }}>
            <h3>Recents:</h3>
            <hr style={{ width: 20, height: 0, color: "blue" }} />
          </div>
          <Feeds sort={this.state.sort} />
        </div>
      </div>
    );
  }
}

export default Home;
