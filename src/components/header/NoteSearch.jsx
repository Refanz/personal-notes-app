import React from "react";

class NoteSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: "",
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(event) {
        this.props.searchNote(event.target.value);

        this.setState(() => {
            return {
                searchValue: event.target.value
            }
        });

    }


    render() {
        return (
            <input type="text" placeholder="Cari Catatan.." value={this.state.searchValue}
                   onChange={this.handleSearchChange}/>
        )
    }
}

export default NoteSearch;