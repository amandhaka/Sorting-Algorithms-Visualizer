var array_length;  
const animations=[];
function heap_root(arr, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;
    if(left<array_length){
        animations.push(["compare1",left,max]);
        animations.push(["compare2",left,max]);
    }
    if (left < array_length && arr[left] > arr[max]) {
        max = left;
    }
    if(right<array_length){
        animations.push(["compare1",right,max]);
        animations.push(["compare2",right,max]);
    }
    if (right < array_length && arr[right] > arr[max])     {
        max = right;
    }

    if (max != i) {
        animations.push(["swap",i,arr[max]]);
        animations.push(["swap",max,arr[i]]);
        swap(arr, i, max);
        heap_root(arr, max);
    }
}
function swap(arr, index_A, index_B) {
    var temp = arr[index_A];
    arr[index_A] = arr[index_B];
    arr[index_B] = temp;
}

export function heapSort(arr) {
    array_length = arr.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(arr, i);
      }

    for (i = arr.length - 1; i > 0; i--) {
        animations.push(["swapFinal",0,arr[i]]);
        animations.push(["swapFinal",i,arr[0]]);
        swap(arr, 0, i);
        array_length--;
      
      
        heap_root(arr, 0);
    }
    return [animations,arr];
}

/*
2 8 3 5 9
        2
       /  \
       8   3
      / \
      5 9

*/