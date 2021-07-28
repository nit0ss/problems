function confirmEnding(str, target) {
  var n1 = str.length;
  var n2 = target.length;

  if(str.substring(n1-n2, n1) === target){
    return true
    }else{
      return false
      };
}

confirmEnding("Bastian", "n");
