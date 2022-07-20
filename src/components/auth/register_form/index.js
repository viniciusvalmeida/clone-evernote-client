import { useState } from "react";
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import { Navigate } from "react-router-dom";

export default function RegisterForm () {
    return (
        <>
            <Column.Group centered>
                <form>
                    <Column size={12}>
                        <Field>
                            <Label size="small">
                                Name:
                            </Label>

                            <Control>
                                <Input
                                    type="name"
                                    required
                                    name="name"
                                />
                            </Control>
                        </Field>

                        <Field>
                            <Label size="small">
                                Email:
                            </Label>

                            <Control>
                                <Input
                                    type="email"
                                    required
                                    name="email"
                                />
                            </Control>
                        </Field>

                        <Field>
                            <Label size="small">
                                Password:
                            </Label>

                            <Control>
                                <Input
                                    type="password"
                                    required
                                    name="password"
                                />
                            </Control>
                        </Field>

                        <Field>
                            <Control>
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <a className="button is-white has-text-custom-purple" href="/login">
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
                    </Column>
                </form>
            </Column.Group>
        </>
    )
}