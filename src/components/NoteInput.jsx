import React from "react";
import "../assets/css/note-input.css"

class NoteInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            archived: false
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmitNote = this.handleSubmitNote.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleDescriptionChange(event) {
        this.setState({
            body: event.target.value
        })
    }

    handleSubmitNote(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className={"note-input"} onSubmit={this.handleSubmitNote}>
                <div className="input-title">
                    <div className="input-title-label">
                        <label>Judul Catatan</label>
                    </div>
                    <input type="text" placeholder="Judul Catatan" value={this.state.title}
                           onChange={this.handleNameChange}/>
                </div>
                <div className="input-body">
                    <div className="input-body-label">
                        <label>Deskripsi</label>
                    </div>
                    <textarea value={this.state.body} onChange={this.handleDescriptionChange}/>
                </div>
                <button>Tambah Catatan</button>
            </form>
        );
    }
}

export default NoteInput;