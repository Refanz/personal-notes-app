import React from "react";
import NoteList from "./NoteList.jsx";

function NoteActiveView({notes, archiveNote, deleteNote}) {
    return (
        <div className={"notes-active"}>
            <h1>Catatan Aktif</h1>
            <div className="note-card-container">
                <NoteList archiveNote={archiveNote} deleteNote={deleteNote} notes={notes} isArchived={false}/>
            </div>
        </div>
    );
}

export default NoteActiveView;