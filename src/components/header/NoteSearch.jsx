import React from "react";

class NoteSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: "",
        }
    }


    render() {
        return (
            <form>
                <input type="text" placeholder="Cari Catatan.." value={this.state.searchValue}/>
                <button>Cari</button>
            </form>
        )
    }
}

export default NoteSearch;