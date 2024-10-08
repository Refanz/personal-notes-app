import React from "react";

function ArchiveMoveButton({id, archived, archiveNote}) {
    if (archived) {
        return <button type={"submit"} id={"btn-archived-note"} onClick={() => archiveNote(id)}>Pindahkan</button>;
    }

    return (
        <button type={"submit"} id={"btn-archived-note"} onClick={() => archiveNote(id)}>Arsipkan</button>
    )
}

export default ArchiveMoveButton;