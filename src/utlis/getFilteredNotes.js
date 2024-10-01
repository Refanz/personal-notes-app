function getFilteredNotes(notes, isArchive) {
    return (
        notes.filter((note) => note.archived === isArchive)
    );
}

export default getFilteredNotes;