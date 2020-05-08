export function selectionSort(array){
    const animations=[];
    for(let i=0;i<array.length-1;i++){
        let minidx=i;
        for(let j=i+1;j<array.length;j++){
            animations.push(["comparison1",minidx,j]);
            animations.push(["comparison2",minidx,j]);
            if(array[minidx]>array[j]){
                minidx=j;
            }
        }
        animations.push(["overwrite",minidx,array[i]]);
        animations.push(["overwrite",i,array[minidx]]);
        swap(minidx,i,array);
    }
    return animations;
}
function swap(minidx,i,array){
    let temp=array[i];
    array[i]=array[minidx];
    array[minidx]=temp;
}