import React from "react";
import "../assets/css/card.css";

function NoteCard({title, body, archived, createdAt}) {
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
            <div className="note-card-date">
                {createdAt}
            </div>
        </div>
    );
}

export default NoteCard;