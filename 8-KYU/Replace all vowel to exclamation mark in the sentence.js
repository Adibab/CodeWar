// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// 
// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    let vowel= "aeiouAEIOU";
   let newstr='';
   
    for( let i=0; i<s.length; i++){
      if (vowel.indexOf(s[i]) === -1 ){
        newstr +=s[i];
      }else{
        newstr+= '!';
        
      }
    }
    return newstr;
  }

 //codewar link - https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript