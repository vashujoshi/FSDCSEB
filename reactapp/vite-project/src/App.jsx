import React from "react";
import Student from "./student";

function App() 
{
  const mystyle={
    color:"red",backgroundColor:'yellow'
  }
  
  return (
    <div style={{backgroundColor:'cyan'}}>
      {h1}
      <div style={mystyle}>
        Abes Engineering College
      </div>
      
      <Student college="Abes Engineering College"
      name=""/>
    </div>
  )
}
export default App;