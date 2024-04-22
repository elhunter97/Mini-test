function del(arr,n){
    let index;
    while(arr.indexOf(n) !== -1){
        index = arr.indexOf(n);
        arr.splice(index,1);
    }
    return arr;
}

let arr = [];
let length = arr.length;
do{
    length = +prompt('Input size of array');
}while(!Number.isInteger(length) || length <=0);

for(let i=0;i<length;i++){
    do{
        arr[i] = +prompt('Element'+i);
    }while(!Number.isInteger(arr[i]));
}
let num;
do{
    num = parseInt(prompt('Input delete number'));
}while(arr.indexOf(num) === -1);

arr=del(arr,num);
for(let i=0;i<arr.length;i++){
    document.write(arr[i]+' ');
}