function rank(mark){
    let r;
    if(mark>8){
        r = 'A';
    } else if(mark<8 && mark>5){
        r = 'B';
    } else r = 'C';

    return r;
}

function avr(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i];
    }
    return sum/arr.length;
}

let arr = [];
let length = arr.length;
do{
    length = +prompt('Input size of array');
}while(!Number.isInteger(length)||length<=0||length>100);

for (let i = 0; i < length; i++) {
    do{
        arr[i] = +prompt('Student '+i);
    }while(!Number.isInteger(arr[i]) || arr[i]<0 || arr[i]>10);
}

let cntA = 0;
let cntB = 0;
let cntC = 0;
for(let i = 0;i<length;i++){
    if(rank(arr[i])==='A') cntA++;
    if(rank(arr[i])==='B') cntB++;
    if(rank(arr[i])==='C') cntC++;
}
// Dem moi hang co bao nhieu hoc sinh
console.log('Rank A: '+cntA+' students');
console.log('Rank B: '+cntB+' students');
console.log('Rank C: '+cntC+' students');

// tinh diem trung binh
let avrMark = avr(arr);
console.log('Average mark = '+avrMark);