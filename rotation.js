function rotationOfNumbers(arr, times) {
    let str = '';
    for(let i = 1; i <= times; i++)
    {
        let element = arr.shift();
        arr.push(element);
    }

    let length = arr.length;

    for(let i = 0; i < length; i++)
    {
        str += arr[i];
        str += ' ';
    }
    console.log(str);
}

rotationOfNumbers([51, 47, 32, 61, 21], 2);
