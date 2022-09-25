//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (message.charAt(message.trim().length -1)  == '?' ){
    if(message.toUpperCase() == message&& (/[a-zA-Z]/.test(message))){
      return 'Calm down, I know what I\'m doing!';}
      else return 'Sure.' ;
    }
  else if((message.toUpperCase() == message) && (/[a-zA-Z]/.test(message))){
    return 'Whoa, chill out!';
  }
    
  else if (!(/[a-zA-Z]/.test(message)) && (!(/\d/.test(message)) )){
    return 'Fine. Be that way!' ;
  }
    else if (!(/[a-zA-Z]/.test(message)) && (!(/\d/.test(message)) )){
    return 'Fine. Be that way!' ;
  }
  else return 'Whatever.';
  }
