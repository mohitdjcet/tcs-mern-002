// // import React from "react";
// // class App extends React.Component{
// //   state = {
// //     count:0
// //   }
// //   componentDidMount(){
// //     console.log("Comp Mounted");
// //   }
// //   componentDidUpdate(){
// //     console.log("Comp Updated");
// //   }
// //   componentWillUnmount(){
// //     console.log("Comp Removed");
// //   }
// //   render(){
// //     return(
// //       <button onClick={()=> this.setState({ count: this.state.count + 1})}>Count {this.state.count}</button>
// //       <h1>Test</h1>
// //     )
// //   }
// // }
// // export default App;

// import { useEffect, useState } from "react";

// function App(){
//   const [count, setCount]= useState(0)
//   //  useEffect(()=>{
//   //   console.log("Comp Mount");
//   // },[])
//   // useEffect(()=>{
//   //   console.log("Comp Change: ", count);
//   // },[count])
//   useEffect(()=>{
//     const timer = setInterval(()=>{
//       console.log("Running");
//     },1000)
//     return()=>{
//       clearInterval(timer)
//     }
//   },[])
//   return(
//     <button onClick={()=> setCount(count+1)}>Count {count}</button>
//   )
// }
// export default App;


import { useState, useEffect } from "react";

function Child() {
  useEffect(() => {
    console.log("Child Mounted");

    return () => {
      console.log("Child Unmounted");
    };
  }, []);

  return <h2>Child Component</h2>;
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Toggle Child
      </button>

      {show && <Child />}
    </>
  );
}

export default App;