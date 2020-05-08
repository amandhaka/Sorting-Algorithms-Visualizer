export function bubbleSort(array){
const animations=[];
for(let i=0;i<array.length-1;i++){
    for(let j=0;j<array.length-i-1;j++){
        animations.push([j,j+1]);
        animations.push([j,j+1]);
        if(array[j]>array[j+1]){
            animations.push([j,array[j+1]]);
            animations.push([j+1,array[j]]);
            let temp=array[j+1];
            array[j+1]=array[j];
            array[j]=temp;
        }
        else{
            animations.push([-1,-1]);
            animations.push([-1,-1]);
        }
    }
}
return animations;
}
// 3 4 2 1 5 6
//{0,3}{1,4}