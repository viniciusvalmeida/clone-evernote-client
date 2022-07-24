import { Navigate } from "react-router-dom";

const privateRoute = ({children}) => (
        localStorage.getItem('user') 
                ? children
                : <Navigate to='/login' replace />
)

export default privateRoute