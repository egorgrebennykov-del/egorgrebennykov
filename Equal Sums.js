function sumsEquals(arr) {
    let hasElement = false;
    for(let i = 0; i < arr.length; i++)
    {
        let sumRight = 0;
        let sumLeft = 0
        if(i !== 0)
        {
            for(let j = 0; j <= i - 1; j++)
            {
                sumLeft += arr[j];
            }
        }

        if(i !== arr.length - 1)
        {
            for(let j = i + 1; j < arr.length; j++)
            {
                sumRight += arr[j];
            }
        }

        if(sumRight === sumLeft)
        {
            console.log(i);
            hasElement = true;
            break;
        }
    }

    if(!hasElement)
    {
        console.log('no');
    }
}


sumsEquals([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
