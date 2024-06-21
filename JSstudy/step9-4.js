const bookmarkBar = document.getElementById("bookmark-bar");
const bookmarkCloseBtn = document.getElementById("bookmark-close-btn");
const bookmarkOpenBtn = document.getElementById("bookmark-open-btn");
const bookmarkCloseText = document.getElementById("bookmark-close-btn-text");
const bookmarkOpenText = document.getElementById("bookmark-open-btn-text");

const isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen");
if (isBookmarkBarOpen === "close") {
    bookmarkBar.style.display = "none";
    bookmarkCloseBtn.style.display = "none";
    bookmarkOpenBtn.style.display = "flex";
} else {
    bookmarkBar.style.display = "block";
    bookmarkCloseBtn.style.display = "flex";
    bookmarkOpenBtn.style.display = "none";
}

const bookmarkBarToggle = () => {
    let isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen");

    if (isBookmarkBarOpen === "close") {
        localStorage.setItem("isBookmarkBarOpen", "open");
        bookmarkBar.style.display = "block";
        bookmarkCloseBtn.style.display = "flex";
        bookmarkOpenBtn.style.display = "none";
        return;
    }
    
    localStorage.setItem("isBookmarkBarOpen", "close");
    bookmarkBar.style.display = "none";
    bookmarkCloseBtn.style.display = "none";
    bookmarkOpenBtn.style.display = "flex";
}

bookmarkOpenBtn.addEventListener("click", bookmarkBarToggle);
bookmarkCloseBtn.addEventListener("click", bookmarkBarToggle);