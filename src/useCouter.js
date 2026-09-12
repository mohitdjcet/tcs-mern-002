import { useState } from "react";

function useCouter(initialValue = 0){
    const [ count, setCount ]= useState(initialValue)

    const inc = () => setCount( count + 1 )
    const dec = () => setCount( count - 1 )
    const reset = () => setCount( initialValue )

    return { count, inc, dec, reset}
}

export default useCouter;