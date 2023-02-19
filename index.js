////////////Задача 1////Первый вариант решения
const arrVow = ['а', 'о', 'у', 'ы', 'э', 'я', 'е', 'ё', 'ю', 'и'];
const string = "Привет! Как дела?";
var vowels = '';
const getVowels = string => {
    for (var n=0; n < string.length; n++) {
        for (var i=0; i < arrVow.length; i++) {
            if (string[n].toLowerCase() == arrVow[i]) {
                vowels += arrVow[i];
            }
        }
    }
    return vowels;
}
console.log(getVowels(string));

////////////Задача 1////Второй вариант решения
const arrVow1 = ['а', 'о', 'у', 'ы', 'э', 'я', 'е', 'ё', 'ю', 'и'];
const string1 = "Привет! Как дела?";
const getVowels1 = string => {
    let vowels1 = ''
    for(j = 0; j < string.length; j++) {
        const currentLetter = string[j].toLowerCase();
        if(arrVow1.includes(currentLetter)) {
            vowels1 += currentLetter;
        }
    }
    return vowels1
}
console.log(getVowels1(string1));

////////////Задача 2////
const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Henry","salary":1100},
    {"name":"George","salary":900},
    {"name":"Mishel","salary":1900},
    {"name":"Hank","salary":1001},]
var nameOfWorkers = [];
const getWorthyWorkers = workersArr => {
    for (let i = 0; i < workersArr.length; i++){
        let salary = workersArr[i].salary ;
        if (salary > 1000) {
                nameOfWorkers.push(workersArr[i].name); 
        }
    }
    return nameOfWorkers
}
console.log(getWorthyWorkers(workers));


////////////Задача 3
const path = "/users/download/index.html";
const isHtml = path => {
    return path.slice(-5) == '.html'
}
console.log(isHtml(path));

////////////Задача 4
var a;
const mixedArray = [12,18,55,3,13,74,14,66,15,22,4];

const evenOrNot = a => {
    return a % 2 == 0 
}
function filter(mixedArray, evenOrNot) {
    const evenArray = [];
    for (i=0; i < mixedArray.length; i++) {
        a = mixedArray[i];
        if (evenOrNot(a) == true) {
            evenArray.push(mixedArray[i]) 
        }
    }
    return evenArray
}
console.log(filter(mixedArray, evenOrNot));