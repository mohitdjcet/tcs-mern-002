import { Link, Outlet } from "react-router";

function App(){
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/1">User 1</Link>
        <Link to="/users/2">User 2</Link>
        <Link to="/users/3">User 3</Link>
        <Link to="/users/4">User 4</Link>
        <Link to="/login">Login</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}
export default App;