import React from "react";
import NoteInput from "../components/NoteInput.jsx";
import getNotes from "../utlis/notes.js";
import NoteView from "../components/NoteView.jsx";
import getCurrentDate from "../utlis/getCurrentDate.js";
import NoteHeader from "../components/header/NoteHeader.jsx";

class NoteApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: getNotes()
        }

        this.handleAddNote = this.handleAddNote.bind(this);
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

    render() {
        return (
            <>
                <header>
                    <NoteHeader/>
                </header>
                <main>
                    <NoteInput addNote={this.handleAddNote}/>
                    <NoteView notes={this.state.notes}/>
                </main>
                <footer>

                </footer>
            </>
        );
    }
}

export default NoteApp;