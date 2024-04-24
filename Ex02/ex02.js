function rank(mark){
    let r;
    if(mark>8){
        r = 'A';
    } else if(mark<8 && mark>5){
        r = 'B';
    } else r = 'C';

    return r;
}

function countStudentRank(arr){
    let cntA = 0;
    let cntB = 0;
    let cntC = 0;
    let newArr= [];
    for (let i = 0; i < arr.length; i++) {
        if(rank(arr[i])==='A') cntA++;
        if(rank(arr[i])==='B') cntB++;
        if(rank(arr[i])==='C') cntC++;
    }
    newArr.push(cntA);
    newArr.push(cntB);
    newArr.push(cntC);

    return newArr;
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
// tinh so luong hs tung hang
console.log('Number of Student rank A = '+countStudentRank(arr)[0]);
console.log('Number of Student rank B = '+countStudentRank(arr)[1]);
console.log('Number of Student rank C = '+countStudentRank(arr)[2]);


// tinh diem trung binh
let avrMark = avr(arr);
console.log('Average mark = '+avrMark);