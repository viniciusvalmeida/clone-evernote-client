import { Route, Navigate } from "react-router-dom";

const privateRoute = ({ component: Component, ...rest }) => (
        
        <Route {...rest} render={props => {
            
            localStorage.getItem('user')
                ? <Component {...props} />
                : <Navigate to='/login' />
        }} />
)

export default privateRoute