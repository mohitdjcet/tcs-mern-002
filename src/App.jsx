// import { useRef } from "react";
import useCouter from "./useCouter";

function App(){
  // const inputRef = useRef(null)
  // const currentRef = useRef(0)

  // const focusInput = ()=>{
  //   console.log(inputRef);
  //   inputRef.current.focus()
  // }

  // const increse = ()=>{
  //   currentRef.current +=1 
  //   console.log(currentRef.current);
  // }
  const { count, inc, dec, reset } = useCouter(5)
  return(
    <div>
      {/* <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
      <button onClick={increse}>+</button> */}
      <h1>Count: {count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App;