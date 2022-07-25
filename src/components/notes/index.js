import { useState, useEffect } from "react";
import { Column, Button } from "rbx";
import { push as Menu } from "react-burger-menu";
import "../../styles/notes.scss";

export default function Notes(props) {
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

                    <p>
                        List...
                    </p>
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