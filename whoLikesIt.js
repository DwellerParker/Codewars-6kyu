// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

function likes(names) {
    let likes = 'like this'
   if(names.length === 1){
      return `${names} likes this`
    }else if (names.length === 2){
      names.splice(1,0,'and').join(' ')
      return `${names.join(' ')} ${likes}`
    }else if (names.length === 3){
      names.splice(2,0,'and').join(' ')
      names[0] += ','
      return `${names.join(' ')} ${likes}`
    }else if (names.length > 3){
      let countLikes =  names.splice(2)
      countLikes = countLikes.length
      names.splice(2,0,'and').join(' ');
      names[0] += ','
      return `${names.join(' ')} ${countLikes} others ${likes}`
    }
    return `no one likes this`
  }