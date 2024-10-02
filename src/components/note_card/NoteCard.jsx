import React from "react";
import ArchiveButton from "./ArchiveButton.jsx";

function NoteCard({id, title, archived, body, createdAt, archiveNote, deleteNote}) {
    return (
        <div className="note-card">
            <div className="note-card-title">
                <h2>{title}</h2>
            </div>
            <div className="note-card-body">
                <p>
                    {body}
                </p>
            </div>
            <div className={"note-card-action"}>
                <ArchiveButton id={id} archiveNote={archiveNote} archived={archived}/>
                <button type={"submit"} id={"btn-delete-note"} onClick={() => deleteNote(id)}>Hapus</button>
            </div>
            <div className="note-card-date">
                {createdAt}
            </div>
        </div>
    );
}

export default NoteCard;