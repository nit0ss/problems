function titleCase(str) {
  let aux = str.toLowerCase().split(" ");
  for ( var i = 0; i < aux.length; i++){
    aux[i] = aux[i][0].toUpperCase() + aux[i].substring(1);
  }
  
  return aux.join(" ");
}

console.log(titleCase("sHoRt AnD sToUt"));
