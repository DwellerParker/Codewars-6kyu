// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count(string) {
    let obj = {}
    const arr = string.split('');
    for(let char of arr){
      if(obj[char]){
        obj[char] += 1
      }else if(!obj[char]){
        obj[char] = 1
      }
    }
    return obj
  }