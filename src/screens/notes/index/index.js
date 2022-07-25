import HeaderLogged from "../../../components/header_logged";
import Notes from "../../../components/notes"
import { Column } from "rbx";
import "../../../styles/notes.scss"
import { useState } from "react";

const NotesScreen = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <HeaderLogged setIsOpen={setIsOpen} />
            <Notes isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default NotesScreen