/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
	chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
*/

function chunkArrayInGroups(arr, size) {
  let buffer = 0;
  
  let final = []
  let reps = arr.length/size;

  for(var j = 0; j<reps; j++){
    let aux = [];
    

    for(var i = 0; i<size; i++){
      if(buffer < arr.length){
        aux.push(arr[buffer++]);
      }
    }
    final.push(aux);
  }

  return final;

}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
