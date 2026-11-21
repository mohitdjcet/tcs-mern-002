import { useParams } from "react-router";

function Users(){
  console.log(useParams());
  const { id }= useParams()
  return(
    <div>
      <h1>User ID : {id}</h1>
    </div>
  )
}
export default Users;