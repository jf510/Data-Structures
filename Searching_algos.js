

// 0(n)
// Not ideal but the best we can do fro an unsorted list


function linearSearch(arr, val) {
    for(let i = 0; i< arr.length; i++) {
        if (arr[i] == val) return i
    }
    return -1;
} 



//      BINARY SEARCH
// For sorted lists 

//function binarySearch(arr, val) {
//   const mid = Math.floor((arr.length - 1) / 2)
//   if(arr[mid] === val) {
//       return mid;
//    } else if(arr[mid] > val) {
//
//    } else {
//
//    }
//}

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length -1;
    while (left <= right){
        let mid = Math.floor((left + right) / 2);
        let midVal = arr[mid];
        if(midVal < val){
            left = mid+1;
        } else if( midVal > val){
            right = mid -1;
        } else{
            return mid;
        }
    }
    return -1;
}

 
