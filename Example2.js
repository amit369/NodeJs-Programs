const app = require('./Example3');
let arr = [2,34,4,1,99];
console.log(arr[0]);

const result = arr.filter((item) => {
       return item>=4;
})

console.log(result);