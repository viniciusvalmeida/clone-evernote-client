import { Button } from "rbx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/users";

export default function UsersDelete() {
    const navigate = useNavigate()

    const [ redirectToHome, setRedirectToHome ] = useState(false)

    const deleteUser = () => {
        if (window.confirm('Are you sure to delete this account?')) {
            UserService.delete()
            setRedirectToHome(true)
        }
    }

    if (redirectToHome)
        navigate('/', { replace:true })

    return (
        <Button
            color="danger"
            onClick={() => deleteUser()}
        >
            Delete Account
        </Button>
    )   
}