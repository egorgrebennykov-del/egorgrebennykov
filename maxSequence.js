function maxSequence(arr) {
    let element = 0;
    let max = 0;
    let sequence = '';
    for(let i = 0; i < arr.length; i++)
    {
        let count = 0;
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[i] === arr[j])
            {
                count++;
            }
            else
            {
                break;
            }
        }

        if(count > max)
        {
            max = count;
            element = arr[i];
        }
    }

    for(let i = 0; i < max + 1; i++)
    {
        sequence += element + ' ';
    }

    console.log(sequence);
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
