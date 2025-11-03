function sorting(arr) {
  let sortedArr = [];
  let length = arr.length;

  for(let i = 0; i < length; i++)
  {
    if(i % 2 === 0)
    {
      arr.sort((a, b) => b - a);
      sortedArr.push(arr[0]);
      arr.splice(0, 1);
    }
    else
    {
      arr.sort((a, b) => a - b);
      sortedArr.push(arr[0]);
      arr.splice(0, 1);
    }
  }

  console.log(sortedArr.join(' '));
}

sorting([34, 2, 32, 45, 690, 6,
32, 7, 19, 47])