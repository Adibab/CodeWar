let array= [1,2,3,4,0]


function arrayLeaders(numbers) {
    let newArray = []
   numbers.filter((number, index) => {
    let totalRight = numbers
      .slice(index + 1)
      .reduce((total, number) => total + number, 0);
//  console.log(totalRight)
//  console.log(number)
 return number > totalRight
   }
   );
 
  

 }


console.log(arrayLeaders(array))

// https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript