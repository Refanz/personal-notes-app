import React from "react";
import NoteSearch from "./NoteSearch.jsx";

function NoteHeader({searchNote}) {
    return (
        <div className="note-header">
            <div className="note-header-title">
                <h1>Personal Notes App</h1>
            </div>
            <div className="note-header-search">
                <NoteSearch searchNote={searchNote}/>
            </div>
        </div>
    );
}

export default NoteHeader;