import React from "react";
import NoteList from "./NoteList.jsx";

function NoteArchivedView({notes, archiveNote, deleteNote}) {
    return (
        <div className={"notes-archived"}>
            <h1>Arsip</h1>
            <div className={"note-card-container"}>
                <NoteList notes={notes} archiveNote={archiveNote} deleteNote={deleteNote} isArchived={true}/>
            </div>
        </div>
    )
}

export default NoteArchivedView;