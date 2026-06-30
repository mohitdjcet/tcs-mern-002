// function App() {
//   // const students = [
//   //   { id: 1, name: "Mohit" },
//   //   { id: 2, name: "Rohit" },
//   //   { id: 3, name: "Neha" },
//   // ];

//   const students = [];

//   return (
//     <ul>
//       {students.length !== 0 && students.map((student) => {
//         return (
//           <h3 key={student.id}>
//             {student.name} {student.id}
//           </h3>
//         );
//       })}
//     </ul>
//   );
// }
// export default App;

// import React,{useState} from 'react';

// function App(){
//   const [name, setName]= useState("");

//   const hadleSubmit = (e)=>{
//     e.preventDefault();
//     console.log("Name:", name);
//   }
//   return(
//     <form onSubmit={hadleSubmit}>
//       <input
//         type='text'
//         value={name}
//         onChange={(e)=> setName(e.target.value)}
//         placeholder='Enter Name'
//         />
//       <button type='submit'>Submit</button>
//     </form>
//   )
// }
// export default App;

import React,{ useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", inputRef);
  };
  return (
    <>
      <h1>Hello</h1>
      <h1>Welcome</h1>
    </>
  );
}
export default App;