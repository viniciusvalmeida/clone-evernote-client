import { useState } from "react";
import { Navbar, Column, Button, Dropdown } from "rbx";
import LogoImage from "../../assets/images/logo-white.png"
import "../../styles/header.scss"
import UserService from "../../services/users"
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export default function HeaderLogged(props) {
    // eslint-disable-next-line no-unused-vars
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')))
    const navigate = useNavigate()
    const [redirectToHome, setRedirectToHome] = useState(false)

    const logOut = () => {
        UserService.logout()
        setRedirectToHome(true)
    }

    if (redirectToHome)
        navigate('/', { replace: true })

    return (
        <Navbar
            color="custom-purple"
            className="navbar-logged"
        >
            <Navbar.Brand>
                <Column.Group>
                    <Column
                        size={11}
                        offset="1"
                    >
                        <Link to='/notes'>
                            <img src={LogoImage} alt="Logo" />
                        </Link>
                    </Column>
                </Column.Group>
                
                <Navbar.Burger
                    className="navbar-burguer burguer"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbar-menu"
                >
                    <span aria-hidden="true">teste</span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Navbar.Burger>
            </Navbar.Brand>

            <Navbar.Menu>
                <Navbar.Segment
                    as="div"
                    className="navbar-item navbar-start"
                    align="start"
                >
                    <Navbar.Item as="div">
                        <Button
                            className="open-button"
                            color="white"
                            outlined
                            onClick={() => props.setIsOpen(true)}
                        >
                            <FontAwesomeIcon icon={faList} />
                        </Button>
                    </Navbar.Item>   
                </Navbar.Segment>
                
                <Navbar.Segment
                    as="div"
                    className="navbar-item navbar-end"
                    align="right"
                >
                    <Navbar.Item as="div">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <Button
                                    className="button"
                                    color="white"
                                    outlined
                                >
                                    <span>
                                        {user.name} ▼
                                    </span>
                                </Button>
                            </Dropdown.Trigger>

                            <Dropdown.Menu>
                                <Dropdown.Content>
                                    <Dropdown.Item as="div">
                                        <Link to="/users/edit">
                                            User Edit
                                        </Link>
                                    </Dropdown.Item>

                                    <Dropdown.Divider />

                                    <Dropdown.Item as="div">
                                        <a 
                                            href="/#"
                                            onClick={e => logOut()}
                                        >
                                            LogOut
                                        </a>
                                    </Dropdown.Item>
                                </Dropdown.Content>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    )
}