import React from "react";
import getFilteredNotes from "../utlis/getFilteredNotes.js";
import NoteActiveCard from "./note_card/NoteActiveCard.jsx";

function NoteActiveView({notes, archiveNote, deleteNote}) {
    return (
        <div className={"notes-active"}>
            <h1>Catatan Aktif</h1>
            <div className="note-card-container">
                {
                    getFilteredNotes(notes, false).map((note) => {
                        return (
                            <NoteActiveCard key={note.id}
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
    );
}

export default NoteActiveView;