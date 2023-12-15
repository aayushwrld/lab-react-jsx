import React from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends React.Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  render(){
    let imageData = this.imageData()
    return(
      <>
      <h1>Kalvium Gallery</h1>
      <div className = "parent_div">
        {imageData.map((el)=>{
          return <img src={el.img} alt="" className="image"/>
        })}
      </div>
    </>
    )
  }
}
