var count = 0;

function cc(card) {
  // Only change code below this line
  var res = "";
  //BASE CASE
  if (card < 2) return;
  if(card < 7) count ++;
  else if(card <= 9 && card >= 7){
  // CONTINUE
    } else count --;

  if (count <= 0) res = "Hold";
  if (count > 0) res = "Bet";

  return count + " " + res;
  
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
