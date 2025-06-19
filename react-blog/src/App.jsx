import Header from "./Header"
import React, { useState } from "react";
import "./App.css"
import Login,{Profile,Picture,key} from "./UserComponent";
function Apple()
{
  const [counter,setcounter]=useState(0);
   function decrement() {
    setcounter(counter-1);
  }
  return(
    <>
    <Login/>
      <Header />
      <h1>counter:{counter}</h1>
      <button onClick={()=>setcounter(counter+1)}>Increase</button>
      {/* <button onClick={()=>setcounter(counter-1)}>decrease</button> */}
      <button onClick={decrement}>Decrement</button>
      <Food/>
      <Profile/>
      <Picture/>
      <h1>Key: {key}</h1>

      

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