import React from "react";
import getFilteredNotes from "../utlis/getFilteredNotes.js";
import NoteCard from "./note_card/NoteCard.jsx";

function NoteList({notes, isArchived, archiveNote, deleteNote}) {

    if (getFilteredNotes(notes, isArchived).length === 0) {
        return (
            <p>Catatan Tidak Ada!</p>
        );
    }

    return (
        <>
            {
                getFilteredNotes(notes, isArchived).map((note) => {
                    return (
                        <NoteCard key={note.id}
                                  id={note.id}
                                  title={note.title}
                                  archived={note.archived}
                                  body={note.body}
                                  createdAt={note.createdAt}
                                  archiveNote={archiveNote}
                                  deleteNote={deleteNote}/>
                    );
                })
            }
        </>
    );
}

export default NoteList;