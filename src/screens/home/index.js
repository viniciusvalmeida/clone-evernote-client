import { Fragment } from "react";
import Header from "../../components/header";
import { Column, Section, Title, Container, Button } from "rbx";
import { Link } from "react-router-dom";
import PresentationImage from "../../assets/images/presentation.png";
import "../../styles/home.scss"

export default function HomeScreen() {
    return(
        <Fragment>
            
            <Header />

            <Section
                size="medium"
                className="home"
            >

                <Container>
                    
                    <Column.Group>
                        
                        <Column size={5}>
                            
                            <Title 
                                size={2} 
                                spaced className="has-text-white"
                            >
                                Create notes easily and access when you wants on the cloud
                            </Title>
                            
                            <Title 
                                size={5}
                                spaced
                                className="has-text-light"
                                subtitle
                            >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum, in doloribus adipisci sit alias atque commodi rerum magnam nihil nulla nam, ea officia at ipsam quo earum fuga labore.
                            </Title>
                            
                            <Link to="/register">
                                <Button className="button is-outlined is-white is-large">
                                    <strong>Register for free Now</strong>
                                </Button>
                            </Link>
                        
                        </Column>
                        
                        <Column 
                            size={6}
                            offset={1}
                        >
                            <img
                                src={PresentationImage}
                                alt="Presentation"
                            />
                        </Column>
                    
                    </Column.Group>
                
                </Container>
            
            </Section>
            
        </Fragment>
    )
}
