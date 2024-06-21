const $search = document.getElementById('search-input');

const moveResultPage = (e) => {
    let searchWord = $search.value;
    window.location.href = `https://www.google.com/search?q=${searchWord}`
    searchWord = "";
}

$search.addEventListener('keypress', (e) => {
    if (e.code === "Enter") {
        moveResultPage();       
    }
})
