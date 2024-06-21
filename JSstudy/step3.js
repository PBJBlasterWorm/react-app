function calculate(a, b, operation) {
    return operation(a, b);
}

const add = function(x, y) {
    return x + y;
}

const result = calculate(10, 15, add)
console.log(result);

function generateMessage(name, greetingFunction) {
    return greetingFunction(name);
}

const morningGreeting = (name) => {
    return `좋은 아침입니다, ${name}`;
}

const eveningGreeting = (name) => {
    return `좋은 저녁입니다, ${name}`;
}

console.log(generateMessage("철수", morningGreeting));
console.log(generateMessage("영희", eveningGreeting));