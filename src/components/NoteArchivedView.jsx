import React from "react";
import NoteArchivedCard from "./note_card/NoteArchivedCard.jsx";
import getFilteredNotes from "../utlis/getFilteredNotes.js";

function NoteArchivedView({notes, archiveNote, deleteNote}) {
    return (
        <div className={"notes-archived"}>
            <h1>Arsip</h1>
            <div className={"note-card-container"}>
                {
                    getFilteredNotes(notes, true).map((note) => {
                        return (
                            <NoteArchivedCard key={note.id}
                                              id={note.id}
                                              title={note.title}
                                              body={note.body}
                                              createdAt={note.createdAt}
                                              archiveNote={archiveNote}
                                              deleteNote={deleteNote}/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default NoteArchivedView;