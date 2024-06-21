// sumArray 함수 작성

const sumarray = (number) => {
    let result = 0;
    for (let i = 0; i < number.length; i++) {
        result += number[i];        
    }
    console.log(result);
}



const numbers = [4, 11, 100, 523, -500];
sumarray(numbers);

// extractProperty 함수 작성
const extractproperty = (array, property) => {
    return array.map((item) => {
        return item[property];
    })
}

const people = [
    { name: "철수", age: 25 },
    { name: "영희", age: 30 },
    { name: "민수", age: 28 },
    { name: "지현", age: 22 }
]

const names = extractproperty(people, "name");
console.log(names);

const ages = extractproperty(people, "age");
console.log(ages);