import { useState } from "react";
import "./box.css";

function App() {
   const [color,setColor]=useState("plum");
  return (
    <>
    <h1>Color picker in React</h1>
    <div style={ {
    height:"500px",
    width:"300px",
    border:"20px solid black",
    background:color
    }}></div>
     <button onClick={()=>setColor("red")}>red</button>
     <button onClick={()=>setColor("blue")}>blue</button>
    </>
  )
}

export default App
