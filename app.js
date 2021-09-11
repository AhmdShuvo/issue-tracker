const numbers=[33,10,20,12];
const possition=numbers.indexOf(20);
console.log(possition);
if(possition>-1){
    numbers.splice(possition,1)
}
console.log(numbers);