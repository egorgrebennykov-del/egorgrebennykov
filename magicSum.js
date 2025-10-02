function magicSum(arr, num) {
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[i] + arr[j] === num)
            {
                let str = String(arr[i]) + " " + String(arr[j]);
                console.log(str);
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);
