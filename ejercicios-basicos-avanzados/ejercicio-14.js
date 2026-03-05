const words = [
  'code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 
  'sleep', 'code', 'enjoy', 'sleep', 'code'
];

function repeatCounter(list) {
  const countMap = {};
  
  list.forEach(word => {
    countMap[word] = (countMap[word] || 0) + 1;
  });

  //el forEach
  
  return countMap;
}

console.log(repeatCounter(words))