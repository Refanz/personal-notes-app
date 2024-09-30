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
            <div className={"note-search"}>
                <form>
                    <input type={"text"} placeholder={"Cari Catatan.."}/>
                    <button>Cari</button>
                </form>
            </div>
        )
    }
}

export default NoteSearch;