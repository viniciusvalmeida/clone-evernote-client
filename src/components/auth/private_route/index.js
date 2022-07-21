import { Route, useNavigate } from "react-router-dom";

const privateRoute = ({ component: Component, ...rest }) => (
    
    <Route {...rest} render={props => {
        const navigate = useNavigate()
        
        localStorage.getItem('user')
            ? <Component {...props} />
            : navigate('/login', {replace: true})
    }} />
)

export default privateRoute