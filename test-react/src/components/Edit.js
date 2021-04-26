import { useState } from 'react';
//import data from "./components/data.json";
import Data from "./components/Data.js";

const Edit = () => {
    // const initNotes = [
    //     { text: 'note1', isEdit: false },
    //     { text: 'note2', isEdit: false },
    //     { text: 'note3', isEdit: false },
    // ];
    const [notes, setNotes] = useState(Data);


    function startEdit(index) {
        const copy = Object.assign([], notes);
        copy[index].isEdit = true;
        setNotes(copy);
    }

    function endEdit(index) {
        const copy = Object.assign([], notes);
        copy[index].isEdit = false;
        setNotes(copy);
    }

    function changeNote(index, event) {
        const copy = Object.assign([], notes);
        copy[index].text = event.target.value;
        setNotes(copy);
    }

    const result = notes.map((note, index) => {
        let elem;

        if (!note.isEdit) {
            elem = <span onClick={() => startEdit(index)}>
                {note.text}
            </span>;
        } else {
            elem = <input
                value={note.text}
                onChange={event => changeNote(index, event)}
                onBlur={() => endEdit(index)}
            />;
        }

        return <li key={index}>{elem}</li>;
    });

    return <ul>
        {result}
    </ul>;
}
export default Edit;
