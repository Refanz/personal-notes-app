function getCurrentDate() {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return new Date().toLocaleDateString("in-ID", options);
}

export default getCurrentDate;