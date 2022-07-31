import { Button, Column, Control, Field, Help, Input, Label } from "rbx";
import { useEffect, useState } from "react";
import UserService from "../../../services/users";

export default function UserEditForm() {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ status, setStatus ] = useState('')

    const initializeUser = async () => {
        const user = await JSON.parse(localStorage.getItem('user'))
        setName(user[ 'name' ])
        setEmail(user['email'])
    }

    useEffect(() => {
        initializeUser()
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            await UserService.update({name: name, email: email})
            setStatus('success')
        } catch (error) {
            setStatus('error')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Field>
                <Control>
                    <Label className="has-text-grey">
                        Full Name
                    </Label>

                    <Input
                        type="name"
                        name="name"
                        value={ name || '' }
                        required
                        onChange={e=> setName(e.target.value)}
                    />
                </Control>
            </Field>

            <Field>
                <Control>
                    <Label className="has-text-grey">
                        Email
                    </Label>

                    <Input
                        type="email"
                        name="email"
                        value={ email || '' }
                        required
                        onChange={e=> setEmail(e.target.value)}
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
                                Update
                            </Button>
                        </Column>
                    </Column.Group>
                </Control>
            </Field>

            {
                status === 'error' && 
                <Help color="danger">
                    Problem in update
                </Help>
            }

            {
                status === 'success' &&
                <Help color="primary">
                    Updated with success
                </Help>
            }
        </form>
    )
}