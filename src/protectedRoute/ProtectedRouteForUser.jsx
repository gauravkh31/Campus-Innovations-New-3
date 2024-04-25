/* eslint-disable react/prop-types */
import { Navigate } from "react-router"

export const ProtectedRouteForUser = ({children}) => {
    const user = JSON.parse(localStorage.getItem('users'))
    if (user?.role === "student") {
      return children
    }
    else {
      return <Navigate to={'/login'}/>
    }
}