import React from "react";
import NoteSearch from "./NoteSearch.jsx";
import "../../assets/css/header.css";

class NoteHeader extends React.Component {

    render() {
        return (
            <div className="note-header">
                <div className="note-header-title">
                    <h1>Personal Notes App</h1>
                </div>
                <div className="note-header-search">
                    <NoteSearch/>
                </div>
            </div>
        );
    }
}

export default NoteHeader;