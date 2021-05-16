function getTodayDate(index) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = new Date();
    date.setDate(new Date().getDate() + index);
    return(date.toLocaleDateString('fr-FR', options))
}

export default getTodayDate