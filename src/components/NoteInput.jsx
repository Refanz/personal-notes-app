import React from "react";

class NoteInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            archived: false,
            titleCount: 50
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmitNote = this.handleSubmitNote.bind(this);
    }

    handleNameChange(event) {
        this.setState((prevState) => {
            let titleLength = event.target.value.length;

            let diffLength = titleLength - prevState.title.length;

            if (titleLength > 50) {
                return {
                    title: prevState.title
                }
            }

            if (titleLength > prevState.title.length) {
                return {
                    title: event.target.value,
                    titleCount: prevState.titleCount -= 1
                }
            }

            if (titleLength < prevState.title.length) {
                return {
                    title: event.target.value,
                    titleCount: prevState.titleCount += Math.abs(diffLength)
                }
            }
        });
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
            <div className={"note-input"}>
                <form onSubmit={this.handleSubmitNote}>
                    <div className="input-title">
                        <div className="input-title-label">
                            <label>Judul Catatan</label>
                        </div>
                        <div className="input-title-remaining">
                            <p>Sisa Karakter: {this.state.titleCount}</p>
                        </div>
                        <input type="text" placeholder="Judul Catatan" required value={this.state.title}
                               onChange={this.handleNameChange}/>
                    </div>
                    <div className="input-body">
                        <div className="input-body-label">
                            <label>Deskripsi</label>
                        </div>
                        <textarea value={this.state.body} required onChange={this.handleDescriptionChange}
                                  placeholder={"Masukkan deskripsi catatan.."}/>
                    </div>
                    <button>Tambah Catatan</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;