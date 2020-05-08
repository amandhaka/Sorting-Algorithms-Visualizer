export function mergeSort(array){
    const animations=[];
    if(array.length<=1) return array;
    const auxiliaryArray=array.slice();
    mergeSortHelper(0,array.length-1,auxiliaryArray,animations);
    return animations;
}
// 3 2 1

function mergeSortHelper(
    startIdx,
    endIdx,
    auxiliaryArray,
    animations
){
    if(startIdx==endIdx) return ;
    const middleIdx=Math.floor((startIdx+endIdx)/2);
    mergeSortHelper(startIdx,middleIdx,auxiliaryArray,animations);
    mergeSortHelper(middleIdx+1,endIdx,auxiliaryArray,animations);
    doMerge(startIdx,middleIdx,endIdx,auxiliaryArray,animations);
}
function doMerge(
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations
){
    let sortArray=[];
    console.log("First",sortArray);
    console.log("Auxi",auxiliaryArray);
    let i=startIdx;
    let j=middleIdx+1;
    while(i<=middleIdx && j<=endIdx){
            animations.push([i,j]);
            animations.push([i,j]);
        if(auxiliaryArray[i]<=auxiliaryArray[j]){
            animations.push([sortArray.length+startIdx,auxiliaryArray[i]]);
            sortArray.push(auxiliaryArray[i++]);
        }
        else{
            animations.push([sortArray.length+startIdx,auxiliaryArray[j]]);
            sortArray.push(auxiliaryArray[j++]);
        }
    }
    while(i<=middleIdx){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([sortArray.length+startIdx,auxiliaryArray[i]]);
        sortArray.push(auxiliaryArray[i++]);
        }
    while(j<=endIdx){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([sortArray.length+startIdx,auxiliaryArray[j]])
        sortArray.push(auxiliaryArray[j++]);    
    }
    for(let i=startIdx;i<=endIdx;i++){
        auxiliaryArray[i]=sortArray[i-startIdx];
    }
    console.log("second",sortArray);
    console.log("Auxi",auxiliaryArray);
}