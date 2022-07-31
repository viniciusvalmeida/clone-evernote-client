import { Card, Column, Container, Section, Title } from "rbx";
import HeaderLogged from "../../../components/header_logged";
import UserEditForm from "../../../components/users/edit_form"
import UserPasswordForm from "../../../components/users/password_form"
import UserDelete from "../../../components/users/delete"
import "../../../styles/users.scss"

const UserEditScreen = () => {
    
    return (
        <>
            <HeaderLogged />

            <Section
                size="medium"
                className="users"
            >
                <Container>
                    <Column.Group
                        centered
                        className="users-edit"
                    >
                        <Column size={4}>
                            <Title
                                size={5}
                                className="has-text-grey has-text-left"
                            >
                                Informaões Pessoais
                            </Title>

                            <Card>
                                <Card.Content>
                                    <UserEditForm />
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>

                    <Column.Group
                        centered
                        className="users-edit"
                    >
                        <Column size={4}>
                            <Title
                                size={5}
                                className="has-text-grey has-text-left"
                            >
                                Password
                            </Title>

                            <Card>
                                <Card.Content>
                                    <UserPasswordForm />
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>

                    <Column.Group centered>
                        <Column
                            size={4}
                            className="has-text-right"
                        >
                            <UserDelete />
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </>
    )
}

export default UserEditScreen