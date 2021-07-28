function frankenSplice(arr1, arr2, n) {
  
  let aux1 = [].concat(arr1);
  let aux2 = [].concat(arr2);

  for(var i = aux1.length-1; i >= 0; i--){
    aux2.splice(n,0,aux1[i]);
  }
  return aux2;
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
