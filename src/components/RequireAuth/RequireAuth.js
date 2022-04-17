import { useSelector } from "react-redux";
import { Navigate,Outlet, useLocation } from "react-router-dom"

const RequireAuth = () => {
    const {user}= useSelector((state) => state.auth);
  
    const location =useLocation()
  return (
    <>
    {user ?
    <Outlet/>
    :<Navigate to="/login" state={{from:location}} replace/>
    }
    
    </>
  )
}

export default RequireAuth