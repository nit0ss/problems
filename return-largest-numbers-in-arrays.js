function largestOfFour(arr) {
  let aux = [];
  
  
  arr.forEach(element =>{
    element.sort(function(a,b){
      return a-b;
    });
    aux.push(element[3]);
  });

  return aux;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

