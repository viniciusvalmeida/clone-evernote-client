import { Card, Column, Container, Section, Title } from "rbx";
import HeaderLogged from "../../../components/header_logged";

const UserEdit = () => {
    
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
                                    Users Edit Form...
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
                                    Users Edit Password Form...
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>

                    <Column.Group centered>
                        <Column
                            size={4}
                            className="has-text-right"
                        >
                            Users Delete Button...
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </>
    )
}

export default UserEdit