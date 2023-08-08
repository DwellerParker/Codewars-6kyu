// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let obj = {}
    let arr = []
    
    for(let key of A){
      if(obj[key]){
        obj[key] += 1
      }else if (!obj[key]){
        obj[key] = 1
      }
    }
  
    for(let num in obj){
      if(obj[num] % 2 !== 0){
        arr.push(num)
      }
    }
    
    return Number(arr.join(' '))
  }