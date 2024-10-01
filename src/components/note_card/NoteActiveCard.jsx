import React from "react";

function NoteCard({id, title, body, createdAt, archiveNote, deleteNote}) {
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
                <button type={"submit"} id={"btn-archived-note"} onClick={() => archiveNote(id)}>Arsipkan</button>
                <button type={"submit"} id={"btn-delete-note"} onClick={() => deleteNote(id)}>Hapus</button>
            </div>
            <div className="note-card-date">
                {createdAt}
            </div>
        </div>
    );
}

export default NoteCard;