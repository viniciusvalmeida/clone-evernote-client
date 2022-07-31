import { Button, Column, Control, Field, Help, Input, Label } from "rbx";
import { useState } from "react";
import UserService from "../../../services/users";

export default function UsersEditPasswordForm() {
    const [ password, setPassword ] = useState('')
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('')
    const [ status, setStatus ] = useState(null)

    const handleSubmit = async e => {
        e.preventDefault()

        if (password === passwordConfirmation) {
            try {
                await UserService.updatePassword({ password: password })

                setStatus('success')
            } catch (error) {
                setStatus('error')
            }
        } else {
            setStatus('error_confirmation_password')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Field>
                <Control>
                    <Label className="has-text-grey">
                        Password
                    </Label>

                    <Input
                        type="password"
                        value={password}
                        name="password"
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                </Control>
            </Field>

            <Field>
                <Control>
                    <Label className="has-text-grey">
                        Password Confirmation
                    </Label>
                    
                    <Input
                        type="password"
                        value={passwordConfirmation}
                        name="passwordConfirmation"
                        required
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                </Control>
            </Field>

            <Field>
                <Control>
                    <Column.Group>
                        <Column className="has-text-right">
                            <Button
                                color="custom-purple"
                                outlined
                            >
                                Update Password
                            </Button>
                        </Column>
                    </Column.Group>
                </Control>
            </Field>

            {
                status === 'error' &&
                <Help color="danger">
                    Problem in password update
                </Help>
            }

            {
                status === 'error_confirmation_password' &&
                <Help color="danger">
                    Password don't match
                </Help>
            }

            {
                status === 'success' &&
                <Help color="primary">
                    Update with success
                </Help>
            }
        </form>
    )
}