export function quickSort(array){
    let animations=[];
    let auxiliary=array.slice();
    quickSortHelper(auxiliary,0,auxiliary.length-1,animations);
    return animations;
}
function quickSortHelper(auxiliary,startIndex,endIndex,animations)
{
    let pivotIndex;
    if(startIndex<endIndex){
        pivotIndex=partition(auxiliary,startIndex,endIndex,animations);
        quickSortHelper(auxiliary,startIndex,pivotIndex-1,animations);
        quickSortHelper(auxiliary,pivotIndex+1,endIndex,animations);
    }

}
function partition(auxiliary,startIndex,endIndex,animations) 
{
    let pivotIndex=startIndex;
    let pivot=auxiliary[endIndex];
    for(let i=startIndex;i<endIndex;i++){
        animations.push([i,endIndex,pivotIndex]);
        animations.push([i,endIndex,pivotIndex]);
        if(auxiliary[i]<=pivot){
            animations.push([i,auxiliary[pivotIndex]]);
            animations.push([pivotIndex,auxiliary[i]]);
            swap(auxiliary,i,pivotIndex);
            pivotIndex++;
        }
        else{
            animations.push([-1,-1,-1]);
            animations.push([-1,-1,-1]);
        }
        animations.push([-1,-1,-1]);
        animations.push([-1,-1,-1]);
    }
    animations.push([-1,-1,-1]);
    animations.push([-1,-1,-1]);
    animations.push([-1,-1,-1]);
    animations.push([-1,-1,-1]);
    animations.push([pivotIndex,auxiliary[endIndex]]);
    animations.push([endIndex,auxiliary[pivotIndex]]);
    swap(auxiliary,pivotIndex,endIndex);
    return pivotIndex;
}
function swap(auxiliary,firstIndex,secondIndex){
    let temp=auxiliary[firstIndex];
    auxiliary[firstIndex]=auxiliary[secondIndex];
    auxiliary[secondIndex]=temp;
}