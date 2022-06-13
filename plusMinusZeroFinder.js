function plusMinus(arr) {
    // Write your code here
    let n = arr.length;
    let positiveNum = 0;
    let negativeNum = 0;
    let zero = 0
    for(let i=0; i<n ; i++){
        if(arr[i]>0){
            positiveNum += 1;
        }
        else if(arr[i]<0){
            negativeNum += 1;
        }
        else{
            zero += 1;
        }
    }
    console.log(parseFloat(positiveNum/n).toFixed(6))
    console.log(parseFloat(negativeNum/n).toFixed(6))
    console.log(parseFloat(zero/n).toFixed(6))
}

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.