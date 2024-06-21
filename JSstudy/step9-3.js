const $quote = document.getElementById("quote");
const API_URL = "https://random-quote.hyobb.com/";
const quoteItem = localStorage.getItem("quote");

const nowDate = new Date();
const month = nowDate.getMonth() + 1;
const date = nowDate.getDate();

const setQuote = (result) => {
  let quote = { createDate: `${month}-${date}`, quoteData: result };
  localStorage.setItem("quote", JSON.stringify(quote));
  $quote.textContent = `"${result}"`;
};

const getQuote = async () => {
  try {
    const data = await fetch(API_URL).then((res) => res.json());
    const result = data[1].respond;
    console.log(data);
    setQuote(result);
  } catch (error) {
    console.log(`error : ${error}`);
    setQuote("탑이 지는건 여러분들이 지는게 아니고 그건 정글탓이다. - Khan -");
  }
};

if (quoteItem) {
  let { createdDate, quoteData } = JSON.parse(quoteItem);
  if (createdDate === `${month}-${date}`) {
    $quote.textContent = `"${quoteData}`;
  } else {
    getQuote();
  }
} else {
  getQuote();
}

getQuote();
