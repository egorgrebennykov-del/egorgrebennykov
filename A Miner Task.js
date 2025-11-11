function minerTask(arr) {
    let matherials = new Map();

    for(let i = 0; i < arr.length; i += 2)
    {
        let quantity = Number(arr[i + 1]);
        if(!matherials.has(arr[i]))
        {
            matherials.set(arr[i], 0);
        }
        matherials.set(arr[i], matherials.get(arr[i]) + quantity);
    }

    for(let [matherial, quantity] of matherials)
    {
        console.log(`${matherial} -> ${quantity}`);
    }
}

minerTask([
'Gold',
'155',
'Silver'
,
'10',
'Copper'
,
'17'
])