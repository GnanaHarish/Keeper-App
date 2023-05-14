import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {

    const [typedNote, setTypedNote] = useState("");
    const [typedTitle, setTypedTitle] = useState("");
    const [isDisplay, setIsDisplay] = useState(false);



    function typedNotes(event) {
        setTypedNote(event.target.value)
    }

    async function addNewNote(event) {
        event.preventDefault();


        const newNote = {
            title: typedTitle,
            content: typedNote,
        };
        //setNotes((prevNotes) => { return [...prevNotes, newNote] });
        props.addNote(newNote)
        setTypedTitle('');
        setTypedNote('');
    }



    function setCurrentTitle(event) {
        setTypedTitle(event.target.value)
    }

    function showTitle() {
        setIsDisplay(true);
    }

    return (
        <div>

            <form className="create-note">
                <input name="title" placeholder="Title" onChange={setCurrentTitle} value={typedTitle} style={{ display: isDisplay ? "" : "none" }} />
                <textarea onChange={typedNotes} name="content" placeholder="Take a note..." rows={isDisplay ? "3" : "1"} value={typedNote} onClick={showTitle} />
                <Zoom in={isDisplay}>
                    <Fab onClick={addNewNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
