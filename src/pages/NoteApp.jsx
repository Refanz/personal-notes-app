import React from "react";
import NoteInput from "../components/NoteInput.jsx";
import getNotes from "../utlis/notes.js";
import NoteActiveView from "../components/NoteActiveView.jsx";
import getCurrentDate from "../utlis/getCurrentDate.js";
import NoteHeader from "../components/header/NoteHeader.jsx";
import NoteArchivedView from "../components/NoteArchivedView.jsx";

import "../assets/css/note.css";
import "../assets/css/card.css";
import "../assets/css/note-input.css"
import "../assets/css/header.css";


class NoteApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: getNotes(),
            notesTemp: []
        }

        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleDeleteNote = this.handleDeleteNote.bind(this);
        this.handleArchiveNote = this.handleArchiveNote.bind(this);
        this.handleSearchNote = this.handleSearchNote.bind(this);
    }

    handleAddNote({title, body, archived}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title: title,
                        body: body,
                        archived: archived,
                        createdAt: getCurrentDate()
                    }
                ]
            }
        })
    }

    handleSearchNote(title) {
        this.setState((prevState) => {

            let searchNotes = prevState.notes.filter((note) => note.title.toLowerCase().includes(title.toLowerCase()));

            return {
                notes: searchNotes,
            }
        })
    }

    handleDeleteNote(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.filter((note) => note.id !== id),
            }
        });
    }

    handleArchiveNote(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.map((note) => {
                    if (note.id === id) note.archived = !note.archived;
                    return note;
                })
            }
        });
    }

    render() {
        return (
            <>
                <header>
                    <NoteHeader searchNote={this.handleSearchNote}/>
                </header>
                <main>
                    <NoteInput addNote={this.handleAddNote}/>
                    <NoteActiveView notes={this.state.notes} archiveNote={this.handleArchiveNote}
                                    deleteNote={this.handleDeleteNote}/>
                    <NoteArchivedView notes={this.state.notes} archiveNote={this.handleArchiveNote}
                                      deleteNote={this.handleDeleteNote}/>
                </main>
                <footer>

                </footer>
            </>
        );
    }
}

export default NoteApp;