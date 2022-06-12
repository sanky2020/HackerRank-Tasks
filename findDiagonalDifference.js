function diagonalDifference(arr) {
    // Write your code here
    let n = arr.length;
    let diagonal1 =0;
    let diagonal2 =0;
    for(let i =0; i<n ; i++){
        for(let j = 0; j<n ; j++){
            //adding diagonal values from left to right            
            if(i === j){
                diagonal1 += arr[i][j];
            }
            //adding diagonal values from right to left
            if( i + j === n-1){
                diagonal2 += arr[i][j];
            }
        }
    }
    return Math.abs(diagonal1 - diagonal2);
}