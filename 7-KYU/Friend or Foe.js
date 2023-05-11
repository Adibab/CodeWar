function friend(friends) {
  //your code here

  let newfrnd = [];
  for (let i = 0; i < friends.length; i++) {
    //  console.log( friends[i])
    if (friends[i].length === 4) {
      newfrnd.push(friends[i]);
    }
  }
  return newfrnd;
}
