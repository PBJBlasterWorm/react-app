const calculateAverage = (...number) => {
    if (number.length === 0) {
        return 0;
    }
    
    const sumNumber = number.reduce((sum, num) => sum + num, 0);
    return sumNumber / number.length;
}

console.log(calculateAverage(1, 2, 3, 4, 5));
console.log(calculateAverage(10, 20, 30));
console.log(calculateAverage());

const getCurrentDateTime = () => {
    const setdate = new Date();
    const year = setdate.getFullYear();
    const month = setdate.getMonth() + 1;
    const date = setdate.getDate();
    const hours = setdate.getHours();
    const minutes = setdate.getMinutes();
    const seconds = setdate.getSeconds();
    return `${year} - ${month} - ${date} ${hours}: ${minutes}: ${seconds}`;
}

console.log(getCurrentDateTime());