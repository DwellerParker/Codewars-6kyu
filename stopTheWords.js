// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
    let arr = string.split(' ');
    let obj = {...arr};
    
    for(const word in obj){
        if(obj[word].length > 4 ){
          obj[word] = obj[word].split('').reverse().join('')
        }
      }
    let result = Object.values(obj).join(' ')
    return result
    
  }
  