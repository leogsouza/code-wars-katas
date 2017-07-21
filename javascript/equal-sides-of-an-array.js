function findEvenIndex(arr)
{
  //Code goes here!
  let sum = 0;
  let sumLeft = 0;
  
  sum = arr.reduce((a,b) => a+b);
  
  for(let i = 0 ; i < arr.length; i++) {
    sum -= arr[i];
    
    if (sumLeft === sum)
      return i;
      
    sumLeft += arr[i];
  }
  
  return -1;
}