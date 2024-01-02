/////////////////////////1///////////////////

function iterateAndLogWithFor(n) {
    for (var i =0;i<n;i++){
        if (i %2=== 0){
            console.log( i +" is even")
        }
        else if (i%2!==0){
        console.log (i +" is odd")
    }

}
}

function iterateAndLogWithWhile(n) {
    var i =0
    while (i<n){
        if (i %2=== 0){
            console.log( i +" is even")
            i++
        }
        else if (i%2!==0){
        console.log (i +" is odd")
        i++
    }
    

}
}

////////////////2////////////////////////////
function iterateAndLogWithFor(n) {
    for (var i =n-1;i>=0;i--){
        if (i %2=== 0){
            console.log( i +" is even")
        }
        else if (i%2!==0){
        console.log (i +" is odd")
    }

}
}

function iterateAndLogWithWhile(n) {
    var i=n-1
    while (i>=0){
        if (i %2=== 0){
            console.log( i +" is even")
            i--
        }
        else if (i%2!==0){
        console.log (i +" is odd")
            i--
    }

}
}

function reverseIterateAndLogRecursively(n) {
    if (n ===0 ){
return (n +" is even")
    }
else if (n %2=== 0){
    console.log( n +" is even")
}
else if (n%2!==0){
    console.log (n +" is odd")
    }

    return reverseIterateAndLogRecursively(n-1)
}

///////////////////////////////3//////////////////////

function weirdDivisionWithFor(n) {
    for (var i = 1;i<=n;i++){
        
        if( i === 1 || (i%5!==0 && i%3!==0)){
            console.log (i)
        }
              else if   (i%5===0 && i%3===0){
            console.log ("juliajames")
        }
        
       else if   (i%3===0 && i%5!==0){
            console.log ("julia")
        }
        else if   (i%5===0 && i%3!==0){
            console.log ("james")
        }
  
    }
}

function weirdDivisionWithWhile(n) {
    var i =0
    while (i<=n){
        i++
        if( i === 1 || (i%5!==0 && i%3!==0)){
            console.log (i)
        }
              else if   (i%5===0 && i%3===0){
            console.log ("juliajames")
        }
        
       else if   (i%3===0 && i%5!==0){
            console.log ("julia")
        }
        else if   (i%5===0 && i%3!==0){
            console.log ("james")
        }
        
  
    }
}

function weirdDivisionWithRecursion(n) {
    
    if (n===1){
        return n
    }
         else if (n%5!==0 && n%3!==0){
              console.log (n)
          }
                else if   (n%5===0 && n%3===0){
              console.log ("juliajames")
          }
          
         else if   (n%3===0 && n%5!==0){
              console.log ("julia")
          }
          else if   (n%5===0 && n%3!==0){
              console.log ("james")
          }
      return weirdDivisionWithRecursion(n-1)
          
    
      }

////////////////////////////4//////////

function laughWithFor(number) {
   var res = "" 
   for(var i =0;i<number;i++){
    res = res+"ha "
   } 
   return res
}

function laughWithWhile(number) {
    var res = "" 
     var i = 0
    while(i<number){
     res = res+"ha "
        i++
    } 
    return res
 }

 function laughRecursively(number){
    if (number === 0){
        return ""
    }
   return "ha "+laughRecursively(number-1)
 }


//////////////////4/////////////////////

function sumWithWhile(number){
    var res = 0
    var i = 0
    while(i<=number){
res = res +i
i++
    }
    return res

}

function sumWithFor(number) {
    var res =0
    for (var i=0;i<=number;i++){
        res = res +i
    }
    return res
}

//////////////////////////5/////////////

function factorialRecursively(number) {
    if (number ===0){
        return 1
    }
    return number*factorialRecursively(number-1)
}

////////////////////////6///////////////////

function  rangeFor(min, max) {
    var res = []
    for (var i=min;i<max;i++){
res.push(i)
    }
    return res
}

function  rangeWhile(min, max) {
    var res = []
    var i=min
    while (i<max){
res.push(i)
i++
    }
    return res
}

//////////////////////7////////////////////

function reverseWithFor(str) {
    var res = ""
    for(var i = str.length-1;i>=0;i--){
        res = res + str[i]
    }
    return res
}

function reverseWithWhile(str) {
    var res = ""
    var i = str.length-1
    while (i>=0){
        res = res + str[i]
        i--
    }
    return res
}

function reverseRecursively(str) {
    var res =""
    if (str>=0){
        return ""
    }
    return res+reverseRecursively(str[str.length-1])
}

////////////////8///////////////////////

function addDigits(num) {
    var res = 0
    var str = num.toString()
    var splitted = str.split("")
    for (var i = splitted[0];i<=splitted.length-1;i++){
        res = res +splitted[i].parseInt
    }
    return res
}
/////////////////////////////9/////////////////////

function fibRecursive(number) {
    var res = 0
    if(number === 0 || number === 1){
        return 1
    }
    return res+fibRecursive(number-1+number-2)

}

///////////////////////////11////////////////////////
function remove(array, element) {
    var arr = []
    for (var i=0;i<array.length;i++){
        if (array[i]!==element){
            arr.push(array[i])
        }
    }
    return arr
}

//////////////////////12/////////////////////////

function average(arrOfNumbers) {
    var res = 0
    for(var i=0;i<arrOfNumbers.length;i++){
        res = res + arrOfNumbers[i]
    }
    return res/arrOfNumbers.length
}

//////////////////////////13//////////////////////

function findMax(array) {
var max = 0
    for (var i=0;i<array.length;i++){
        if (array[i]>max){
            max = array[i]
        }
    }
    return max
}

//////////////////////////////15////////////////////

function palindrome(str) {
    var res = ""
    for(var i = str.length-1;i>=0;i--){
        res = res + str[i]
    }
    if (str === res){
        return true
    }
    return false
}