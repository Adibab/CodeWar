// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// 
// Your task is to return the number of JavaScript developers coming from Europe.
// your function should return number 1.
// 
// If, there are no JavaScript developers from Europe then your function should return 0.
// 
// Notes:
// The format of the strings will always be Europe and JavaScript.
// var list1 = [
    // { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    // { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    // { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    // { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//   ];

function countDevelopers(list) {
    x=0;
  for(i=0;i<list.length;i++){
    if(((list[i]["continent"])==='Europe')&&((list[i]["language"])==="JavaScript")){
      x+=1
    }
  }
    return x
  }

  // codewar link -https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
