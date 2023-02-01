/*import React from 'react'
import ReactDOM from "react-dom/client";
const num=[1,2,3,4,5];
const updatedNums=num.map((number)=>
{
    return<li>{num}</li>;
});
ReactDOM.render(
    <ul>{updateNums}</ul>,
    document.getElementById('root')
);*/
/*import React,{useState}from 'react';
const App=()=>{
  const [num,setnum]=useState(0);   
 return( <button onClick={()=>{
    setnum(num+1)
  }}>
    Click me{num}
    </button>);
}
export default App;*/
/*import React, { useState } from 'react';
import App from "./App";
function App1() {
  const [count, setCount] = useState(0);
  const handleClick=()=>{
    setCount(count + 1);
  };
 
  return (
    <div>
    <h1>This is App Component</h1>
  <button onClick={handleClick}>clicked {count}times</button>
  <button onClick={handleClick}>clicked {count}times</button>
    </div>
  );
};
export default App1;*/
/*import React from "react";
const App=()=>{
  return (
    <div>
    <h2>This is divya</h2>
    </div>
  );
};
  export default App;
  function Sum(a,b){
    return a+b;
  }
  Sum(1,2)*/
  import {useState} from "react";
import Card from "./Card";
import Header from "./Header";
import Total from "./Total";
import img1 from "./images/mobile-1.jpg";
import img2 from "./images/mobile-2.jpg";
import img3 from "./images/mobile-3.jpg";
import img4 from "./images/mobile-4.jpg";

let products=[
  {
    name:"Redmi 4",
    path: img1,
    price:9000,
  },
  {
    name:"Samsung M13",
    path:img2,
    price:10000,
  },
  {
    name:"Redmi A1",
    path:img3,
    price:13000,
  },
  {
    name:"Redmi 9A",
    path:img4,
    price:20000,
  },
];
function App() {
  let [cartItems, setCartItems]=useState(0);
  let [total, setTotal]=useState(0);
  function addToCart(){
    setCartItems(cartItems+1);
  }
  function removeFromCart(){
    setCartItems(cartItems-1);
  }
  function changeTotal(t){
    console.log(t);
    setTotal(total+t);
  }
  return (
    <>
      <Header cartItems={cartItems} />
      <main>
        {products.map((e)=>(
          <Card
            product={e}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            changeTotal={changeTotal}
          />
        ))}
      </main>
      <Total total={total} />
    </>
  );
}
export default App;

