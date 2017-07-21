function highAndLow(numbers){
  // ...
  const arr = numbers.match(/\-?\d+/gi);
  if (arr.length === 1) {
    return arr[0]+ ' ' +arr[0];
  }
  const highest = arr.sort((a, b) => a-b).pop();
  const lowest = arr.sort((a, b) => b - a).pop();
  console.log(numbers,arr, highest, lowest);
  return highest+ ' ' +lowest;
}