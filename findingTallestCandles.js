function birthdayCakeCandles(candles) {
    // Write your code here
    
    let maxHeight = Math.max(...candles);
    
    let filteredArrayWithTallestCandles = candles.filter((element)=> maxHeight===element)
    
    return filteredArrayWithTallestCandles.length;
    
}

