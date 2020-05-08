export function insertionSort(array){
    const animations=[];
    if(array.length<=1) return array;
    for(let i=1;i<array.length;i++){
        let key=array[i];
        let j=i-1;
        animations.push(["comparison1",j,i]);
        animations.push(["comparison2",j,i]);
        while(j>=0 && array[j]>key){
            animations.push(["overwrite",j+1,array[j]]);
            array[j+1]=array[j];
            j=j-1;
            if(j>=0){
                animations.push(["comparison1",j,i]);
                animations.push(["comparison2",j,i]);
            }
        }
        animations.push(["overwrite",j+1,key]);
        array[j+1]=key;
    }
    return animations;
}