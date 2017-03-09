var findSum = (num) => {
  var total = 0

  for(var i = num-1; i > 0; i--){
    if(i % 3 === 0 || i % 5 === 0){
      total += i
    }
  }

  return total
}

console.log(findSum(1000))