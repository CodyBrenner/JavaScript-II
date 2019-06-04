function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.	  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}	
// THE ABOVE LINE RETURNS ARG LENGTH 


 getLength(items, function(length) {
  console.log(length);
});

 function last(arr, cb) {	function last(arr, cb) {
  // last passes the last item of the array into the callback.	  // last passes the last item of the array into the callback.
  return cb(arr[arr.length -1]);
}	}


 last(items, function(end) {
  console.log(end);
});

 function sumNums(x, y, cb) {	function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.	  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}	}


 sumNums( 2, 4, function(sum) {
  console.log(sum);
});

 function multiplyNums(x, y, cb) {	function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.	  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}	}


 function contains(item, list, cb) {	multiplyNums(3, 5, function(prod){
  // contains checks if an item is present inside of the given array/list.	  console.log(prod);
  // Pass true to the callback if it is, otherwise pass false.	});
}	
 // function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
// //   if (list.item){
// //     return true;
// //   } else{
// //     return false;
//   }
// }


 /* STRETCH PROBLEM */	/* STRETCH PROBLEM */