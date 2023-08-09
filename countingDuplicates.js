// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    let dupli = {}
    text = text.toLowerCase().split('');
    let count = 0; 
     for(let num of text){
       if(dupli[num]){
         dupli[num] += 1
       }else{
         dupli[num] = 1
       }
     }
     
     let answer = Object.values(dupli)
      answer = answer.filter(x => x >= 2)
     return answer.length
   }