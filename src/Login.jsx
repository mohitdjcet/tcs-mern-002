import { useContext } from "react";
import UserContext from "./UserContext"

function Login(){
    const {isLogin,setIsLogin}= useContext(UserContext)

    return(
        <div>
            <button onClick={()=> setIsLogin(!isLogin)}>{isLogin ? "Logout":"Login"}</button>
        </div>
    )
}

export default Login