import { useState } from "react";
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/users";

export default function RegisterForm () {
    const navigate = useNavigate()
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirectToLogin, setRedirectToLogin] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await UserService.register({ name: name, email: email, password: password })
            setRedirectToLogin(true)
        } catch (error) {
            setError(true)
        }
    }

    if (redirectToLogin)
        navigate("/login", { replace: true })

    return (
        <>
            <Column.Group centered>
                <form onSubmit={handleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small">
                                Name:
                            </Label>

                            <Control>
                                <Input
                                    required
                                    type="name"
                                    name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Control>
                        </Field>

                        <Field>
                            <Label size="small">
                                Email:
                            </Label>

                            <Control>
                                <Input
                                    required
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Control>
                        </Field>

                        <Field>
                            <Label size="small">
                                Password:
                            </Label>

                            <Control>
                                <Input
                                    required
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Control>
                        </Field>

                        <Field>
                            <Control>
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <a 
                                            className="button is-white has-text-custom-purple"
                                            onClick={e => setRedirectToLogin(true)}
                                            href
                                        >
                                            Login
                                        </a>
                                    </Column>

                                    <Column>
                                        <Button 
                                            color="custom-purple"
                                            outlined
                                        >
                                            Register
                                        </Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>

                        { error && <Help color="danger">
                            Email or Password is invalid
                        </Help> }
                    </Column>
                </form>
            </Column.Group>
        </>
    )
}