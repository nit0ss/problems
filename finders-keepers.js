function findElement(arr, func) {
   let num;
   var aux;
   for (var i = 0 ; i<arr.length; i++){
     num = arr[i]
     if (func(num)){
        return arr[i];
       }else{
         continue;
       }
   }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
