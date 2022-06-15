function returnSomething(x, count){
    let storedData = "";
    for(let i=0; i<count; i++){
        storedData += x
    }
    return storedData;
}

function staircase(n) {
    // Write your code here
    for(let i=1; i<=n ; i++){
        console.log(returnSomething(" ",(n-i))+returnSomething('#',(i)));
    }
}


// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of 'n'

//Sample Output based on n = 6

//      #
//     ##
//    ###
//   ####
//  #####
// ######