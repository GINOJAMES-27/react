import Header from "./Header"
import React, { useState } from "react";
import "./App.css"
function Apple()
{
  const [counter,setcounter]=useState(0);
  return(
    <>
      <Header />// component imported from Header.jsx from differnt file
      <h1>counter:{counter}</h1>
      <button onClick={()=>setcounter(counter+1)}>Increase</button>
      <button onClick={()=>setcounter(counter-1)}>decrease</button>
      <Food/>

      

    </>
  )
}
function Food()//component within the same file
{
  return(
    <div>
      <h1>Food</h1>
      <p>Food is essential for life.</p>
    </div>
  )
}
export default Apple;