// import Student from "./Student";

// export default function App() {
//   // const user = [
//   //   {name:"Mohit"},
//   //   {},
//   //   {}
//   // ]
//   return (
//     <div>
//       <Student name="Mohit" course="React 19" />
//       <Student name="Rohit" course="Angular" />
//       <Student name="Nitin" course="Python" />
//     </div>
//   );
// }

// import React from 'react';

// export default function App(){
//   return React.createElement(
//     "h1",
//     null,
//     "Mohit Decodes"
//   )
// }

import { useState } from "react";

function App(){
  const [count,setCount]= useState(0);
  const [name, setName]= useState("Guest")

  const handleClick = ()=>{
    setCount(count+1)
  }

  return(
    <div>
    <h1>Mohit {count}</h1>
    <button onClick={handleClick}>+</button>
    <input type="name" onChange={(e)=> setName(e.target.value)} />
    <h1>You Typed: {name}</h1>
    </div>
  )
}
export default App;