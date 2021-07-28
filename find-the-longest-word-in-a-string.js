function findLongestWordLength(str) {
  let arr = str.split(" ")
  var aux = 0;
  
  arr.forEach(function(str){
    if( str.length > aux){
      aux = str.length;
    }
  })
  
  return aux;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

