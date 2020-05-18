export function mergeSort(array){
    const animations=[];
    const helper=[];
    if(array.length<=1) return array;
    const auxiliaryArray=array.slice();
    //console.log(auxiliaryArray)
    mergeSortHelper(0,array.length-1,auxiliaryArray,helper,animations);
    return animations;
}
function mergeSortHelper(
    startIdx,
    endIdx,
    auxiliaryArray,
    helper,
    animations
)
{
    if(startIdx<endIdx){
    let middleIdx=Math.floor((startIdx+endIdx)/2);
    mergeSortHelper(startIdx,middleIdx,auxiliaryArray,helper,animations);
    mergeSortHelper(middleIdx+1,endIdx,auxiliaryArray,helper,animations);
    merge(startIdx,middleIdx,endIdx,auxiliaryArray,helper,animations);
    }
}
function merge(
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    helper,
    animations
){
    let current=startIdx;
    for(let i=startIdx;i<=endIdx;i++){
        helper[i]=auxiliaryArray[i];
    }
    let low=startIdx;
    let mid=middleIdx+1;
    while(low<=middleIdx && mid<=endIdx){
        animations.push([low,mid]);
        animations.push([low,mid]);
        if(helper[low]<helper[mid]){
            animations.push([current,helper[low]]);
            auxiliaryArray[current++]=helper[low++];
        }
        else{
            animations.push([current,helper[mid]]);
            auxiliaryArray[current++]=helper[mid++];
        }
    }
    let remaining=middleIdx-low;
    for(let j=0;j<=remaining;j++){
        animations.push([(low+j),(low+j)]);
        animations.push([(low+j),(low+j)]);
        animations.push([current,helper[low+j]]);
        auxiliaryArray[current++]=helper[low+j];
    }
    remaining=endIdx-mid;
    for(let l=0;l<=remaining;l++){
        animations.push([(mid+l),(mid+l)]);
        animations.push([(mid+l),(mid+l)]);
        animations.push([current,helper[mid+l]]);
        auxiliaryArray[current++]=helper[mid+l];
    }
}