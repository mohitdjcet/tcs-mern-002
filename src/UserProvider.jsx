import { useState } from "react";
import UserContext from "./UserContext";

function UserProvider({children}){
    const [isLogin, setIsLogin]= useState(false)

    return(
        <UserContext.Provider value={{isLogin,setIsLogin}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider