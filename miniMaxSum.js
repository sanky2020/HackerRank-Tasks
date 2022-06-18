function miniMaxSum(arr) {
    // Write your code here
    let sum = arr.reduce((a, b) => {
        a += b;
        return a
    },0);
    
    //OR
    // let sum = arr.reduce((a,b)=>a+b);
    
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    console.log((sum - maxVal) + ' ' + (sum - minVal));
    
    //Output => minValue maxValue
}