import { useNavigate } from "react-router";

export default function Login(){
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate(1)
    }
    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleClick}>Login & go to users</button>
        </div>
    )
}