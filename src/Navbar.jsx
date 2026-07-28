import { useContext } from "react";
import UserContext from "./UserContext"

function NavBar(){
    const {isLogin}= useContext(UserContext)

    return(
        <h2>
            {isLogin ? "User Logged In":"Guest User"}
        </h2>
    )
}

export default NavBar