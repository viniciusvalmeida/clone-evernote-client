import { useState } from "react";
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/users";

export default function LoginForm() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirectToRegister, setRedirectToRegister] = useState(false)
    const [redirectToNotes, setRedirectToNotes] = useState(false)
    const [error, setError] = useState(false)

    if (redirectToRegister)
        navigate("/register", { replace: true })
    else if (redirectToNotes)
        navigate("/notes", { replace: true })

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            await UserService.login({ email: email, password: password })
            setRedirectToNotes(true)
        } catch (error) {
            setError(true)
        }
    }

    return (
        <>
            <Column.Group centered>
                <form onSubmit={handleSubmit}>
                    <Column size={12}>
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
                                        <Button
                                            as="a"
                                            className="button is-white has-text-custom-purple"
                                            onClick={e => setRedirectToRegister(true)}
                                        >
                                            Register
                                        </Button>
                                    </Column>

                                    <Column>
                                        <Button
                                            color="custom-purple"
                                            outlined
                                        >
                                            Login
                                        </Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>

                        { error && <Help color="danger">
                            Email or Password invalid
                        </Help> }
                    </Column>
                </form>
            </Column.Group>
        </>
    )
}
