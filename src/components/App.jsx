import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateArea from './createArea'
import { useState } from 'react'
import dataNotes from '../data/notes'




function App() {

    const [jsNotes, setNotes] = useState(dataNotes);



    const addNote = (newNote) => {
        newNote.key = jsNotes.length + 1;
        setNotes((prevNotess) => [
            ...prevNotess,
            newNote
        ])
    }

    const deleteNote = (deleteNote) => {
        //console.log(deleteNote)
        setNotes((prevNotes) => {
            return prevNotes.filter((val, idx) => {
                //console.log(val.key);
                return val.key !== deleteNote;
            })
        })
    }

    return <div>
        <Header />
        <CreateArea addNote={addNote} />
        <Note notes={jsNotes} deleteNote={deleteNote} />
        <Footer />

    </div>
}


export default App;