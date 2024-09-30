import React from "react";
import NoteCard from "./NoteCard.jsx";

function NoteView({notes}) {
    return (
        <>
            <h1>Catatan Aktif</h1>
            <div className="note-card-container">
                {
                    notes.map((note) => {
                        return (
                            <NoteCard key={note.id}
                                      title={note.title}
                                      archived={note.archived}
                                      body={note.body}
                                      createdAt={note.createdAt}/>
                        );
                    })
                }
            </div>

            <h1>Arsip</h1>
            <div className={"note-container-archived"}>

            </div>
        </>
    );
}

export default NoteView;