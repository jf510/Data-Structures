function countZeros(arr){
    
    let left = 0;
    let right = arr.length -1;
    while(left <= right){
        let mid = Math.floor((left + right) /2);
        let midVal = arr[mid];
        if (midVal > 0){
            left = mid + 1;
        }
        else {
            zeros = right - left;
        } 
    }
    return zeros
}

[0,1,2,3,3,3,4,5,6,7,7,7,7]
function sortedFrequency(arr, val){
    
    left = 0;
    right = arr.length -1;
    while (left <= right){
        let mid = Math.floor((left+right) / 2)
        let midVal = arr[mid];
        if(midVal > val){
            right = mid -1;
        if(arr[left] !== arr[right]){
            let mid = Math.floor((left+right) / 2);
            let midVal = arr[mid];
        if (midVal < val){
            left = midVal+1;
            frequency = right - left;
            return frequency;
        }
    }

 }
        else if(midVal < val){
            left = mid + 1;
            if(arr[left] !== arr[right]){
                let mid = Math.floor((left+right) / 2);
                let midVal = arr[mid];
            if(midVal === arr[right]){
                frequency = right - left;
                return frequency;
            }
            }
        } 
    }
}


function findRotatedIndex(arr, num){
    let left = 0;
    let right = arr.length / 2;
    while(left <= right){
        let mid = (Math.floor((left+right) / 2));
        let midVal = arr[mid];
        if(midVal > right){
            left = mid + 1;
        }
        
    }
}



function findRotationCount(arr, low = 0, high = arr.length - 1) {
    if (high < low) return 0;
    if (high === low) return low;
    let mid = Math.floor((low + high) / 2)
  
    // Check if element (mid+1) is minimum element.
    // Consider the cases like [3, 4, 5, 1, 2]
    if (mid < high && arr[mid + 1] < arr[mid])
      return mid + 1;
  
    // Check if mid itself is minimum element
    if (mid > low && arr[mid] < arr[mid - 1]) {
      return mid;
    }
  
    // Decide whether we need to go to left half or
    // right half
    if (arr[high] > arr[mid]) {
      return findRotationCount(arr, low, mid - 1);
    }
  
    return findRotationCount(arr, mid + 1, high);
  }
  
    module.exports = findRotationCount



function findFloor(arr, num, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    if (num >= arr[high]) return arr[high];
  
    let mid = Math.floor((low + high) / 2)
  
    if (arr[mid] === num) return arr[mid];
  
    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
      return arr[mid - 1];
    }
  
    if (num < arr[mid]) {
      return findFloor(arr, num, low, mid - 1);
    }
  
    return findFloor(arr, num, mid + 1, high)
  }
  
  module.exports = findFloor



