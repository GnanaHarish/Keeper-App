import Heading from "./Heading"
import Para from './Para'
import DeleteIcon from '@mui/icons-material/Delete';



function Note(props) {


    function deleteNotes(key) {
        props.deleteNote(key)
    }

    const note = props.notes.map((val) => (
        <div className='note' key={val.key}>
            <Heading title={val.title} />
            <Para content={val.content} />
            <button onClick={() => deleteNotes(val.key)}><DeleteIcon /></button>
        </div>
    ))
    return note
}


export default Note;

