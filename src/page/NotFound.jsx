import { Link } from "react-router";

function NotFound(){
  return(
    <div>
      <h1>401 - Page Not Found</h1>
      <p>Sorry, ye page available nhi hai</p>
      <Link to="/">Go to Home</Link>
    </div>
  )
}
export default NotFound;