const newBookmarkForm = document.getElementById("bookmark-item-input-form");
const newBookmarkFormToggleBtn = document.getElementById("bookmark-item-add-btn");
const bookmarkAddbtn = document.getElementById("add-btn");
const bookmarkCancelBtn = document.getElementById("cancel-btn");
const bookmarkItemList = document.getElementById("bookmark-list");

let bookmarkList = [];
localStorage.getItem("bookmarkList")
    ? (bookmarkList = JSON.parse(localStorage.getItem("bookmarkList")))
    : localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));

let isAddBtnClick = false;
newBookmarkForm.style.display = "none";

const newBookmarkToggle = () => {
    isAddBtnClick = !isAddBtnClick;
    isAddBtnClick ? (newBookmarkForm.style.display = "block") 
    : (newBookmarkForm.style.display = "none");
}

const deleteBookmarkItem = (id) => {
    const isDelete = window.confirm("정말 삭제하시겠습니까?");
    if (isDelete) {
        let bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
        let nowBookmarkList = bookmarkList.filter((element) => element.createdAt !== id);
        localStorage.setItem("bookmarkList", JSON.stringify(nowBookmarkList));
        document.getElementById(`bookmark-item-${id}`).remove();
        return;
    }
}

const setBookmarkItem = (item) => {
    const bookmarkItem = document.createElement("div");
    bookmarkItem.classList.add("bookmark-item");
    bookmarkItem.id = `bookmark-item-${item.createdAt}`;

    const bookmarkInfo = document.createElement("div");
    bookmarkInfo.classList.add("bookmark-info");

    const bookmarkUrl = document.createElement("a");
    bookmarkUrl.classList.add("bookmark-url");

    const urlIcon = document.createElement("div");
    bookmarkUrl.classList.add("bookmark-url");

    const urlIconImg = document.createElement("img");

    const urlName = document.createElement("div");
    urlName.classList.add("url-name");

    const bookmarkDelBtn = document.createElement("div");
    bookmarkDelBtn.classList.add("del-btn");
    bookmarkDelBtn.textContent = "삭제";
    bookmarkDelBtn.addEventListener("click", () => {
        deleteBookmarkItem(item.createdAt);
    })

    bookmarkUrl.href = item.url;
    urlIconImg.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`;
    urlName.textContent = item.name;

    bookmarkItem.appendChild(bookmarkInfo);
    bookmarkItem.appendChild(bookmarkDelBtn);
    bookmarkInfo.appendChild(bookmarkUrl);
    bookmarkUrl.appendChild(urlIcon);
    bookmarkUrl.appendChild(urlName);
    urlIcon.appendChild(urlIconImg);

    bookmarkItemList.appendChild(bookmarkItem);
}

const setBookmarkList = () => {
    bookmarkList.forEach((item) => {
        setBookmarkItem(item);
    });
}

const addBookmarkItem = () => {
    let bookmarkList = [];
    if (localStorage.getItem("bookmarkList")) {
        bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    }
    let name = document.getElementById("new-bookmark-input-name");
    let url = document.getElementById("new-bookmark-input-url");
    let createdAt = Date.now();
    bookmarkList.push({ name: name.value, url: url.value, createdAt });
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
    setBookmarkItem({ name: name.value, url: url.value, createdAt });
    name.value = "";
    url.value = "";
    newBookmarkToggle();
}

setBookmarkList();
newBookmarkFormToggleBtn.addEventListener("click", newBookmarkToggle);
bookmarkAddbtn.addEventListener("click", addBookmarkItem);
bookmarkCancelBtn.addEventListener("click", newBookmarkToggle)