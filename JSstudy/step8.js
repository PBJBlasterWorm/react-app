const text = document.getElementById('text');
const changeTextButton = document.getElementById('changeTextButton');

const mySOS = ["oh my god~~~~~", "제발 취업좀 시켜줘 ㅠㅠ", "하아~~~~~~~"]


let i = 0;
changeTextButton.addEventListener('click', () => {
    text.textContent = mySOS[i];
    console.log(i)
    i++;

    if (i > mySOS.length - 1) {
        i = 0;
    }
});

text.querySelector