import { useState, useEffect } from "react";
import { Column } from "rbx";
import { push as Menu } from "react-burger-menu";
import "../../styles/notes.scss";
import List from "../notes/list";
import NoteService from "../../services/note"

export default function Notes(props) {
    const [ notes, setNotes ] = useState([])
    const [ current_note, setCurrentNote ] = useState({ title: "", body: "", id: "" })

    async function fetchNotes() {
        const response = await NoteService.index()

        if (response.data.length >= 1) {
            setNotes(response.data.reverse())
            setCurrentNote(response.data[0])
        }
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    const createNote = async (params) => {
        await NoteService.create()
        fetchNotes()
    }

    const selectNote = (id) => {
        const note = notes.find((note) => note._id === id)
        setCurrentNote(note)
    }

    return (
        <>
            <Column.Group
                className="notes"
                id="notes"
            >
                <Menu
                    pageWrapId={"notes-editor"}
                    isOpen={props.isOpen}
                    onStateChange={(state) => props.setIsOpen(state.isOpen)}
                    disableAutoFocus
                    outerContainerId={"notes"}
                    customBurgerIcon={false}
                    customCrossIcon={false}
                >
                    <Column.Group>
                        <Column
                            size={10}
                            offset={1}
                        >
                            Search...
                        </Column>
                    </Column.Group>

                    <List
                        notes={notes}
                        selectNote={selectNote}
                        createNote={createNote}
                        current_note={current_note}
                    />
                </Menu>

                <Column
                    size={12}
                    className="note-editor"
                    id="notes-editor"
                >
                    Editor...
                </Column>
            </Column.Group>
        </>
    )
}