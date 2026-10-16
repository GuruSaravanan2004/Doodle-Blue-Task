let numbers = [10,20,30,40]
let res = numbers.reduce((total, num) => {
    return total+num;
},10)
console.log(res)