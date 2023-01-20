function filter_list(l) {
return l.filter((element)=>  Number(element) 
)

}


let input1 = [1, 2, "a", "b"]
console.log(filter_list(input1))