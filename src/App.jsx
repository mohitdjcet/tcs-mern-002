// // import React,{Component} from 'react';

// // class App extends Component{
// //   render(){
// //     return(
// //       <h1>Hello Mohit</h1>
// //     )
// //   }
// // }
// // export default App;

// function App(){
//   // const handleClick = (event) =>{
//   //   console.log(event)
//   // }
//   const handleChange =(e)=>{
//     console.log(e.target.value);
//   }
//   return(
//     // <button onClick={handleClick}>Click Me</button>
//     <input 
//       type="text"
//       onChange={handleChange}
//       placeholder="Type Here"
//     />
//   )
// }
// export default App;

// import React,{useState} from 'react'
// function App(){
//   // const [ text, setText]= useState("");
//   const handleFocus = ()=>{
//     console.log("Input Focus");
//   }
//     const handleBlur = ()=>{
//     console.log("Input Blurred");
//   }
//   return(
//     <div>
//       {/* <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />

//       <h2>You Typed: {text}</h2> */}
//       <input
//         type='text'
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         />
//     </div>
//   )
// }
// export default App;


// function App(){
// const isLoggedIn = true;
// const name = "Mohit"

// // if(isLoggedIn){
// //   return(
// //     <h1>Welcome User</h1>
// //   )
// // } else {
// //   return(
// //     <h1>Please Login</h1>
// //   )
// // }

// return(
//   <h1>
//     {isLoggedIn ? 
//       <h1 onClick={nkdasjfhkj}>Mohit{isLoggedIn}</h1>
//       :
//       <h1></h1>}
//   </h1>
// )
// }
// export default App;

import React,{useState} from 'react'
function App(){
  // const [ isLogin, setIsLogin]= useState(false)
  const showMsg = false;
  const name = "Mohit"
  return(
    <div>
      {/* <button onClick={()=> setIsLogin(!isLogin)}>Toggle Login</button>
      <h1>
        {isLogin ? "Dashboard":"Login Page"}
        {
          role === 'admin'?
          "Admin Panel"
          : role === "user"
          ?"User Dashboard"
          : "Guest Page"
        }
      </h1> */}
      {/* a && b  a || b  */}
      {/* {showMsg && <h2>Hello React</h2>} */}
      {data && <h1>{data.name}</h1>}
      <></>
    </div>
  )
}
export default App;