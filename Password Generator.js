function lettersChangeNumbers(arr) {
    let passwordArr = Array.from(arr[0] + arr[1]);
    let helpWord = arr[2];
    let count = 0;

    while(passwordArr.some(char => /[aeiou]/.test(char)))
    {
        let index = passwordArr.findIndex(char => /[aeiou]/.test(char));
        passwordArr[index] = helpWord[count].toUpperCase();
        count++;
        if(count === helpWord.length)
        {
            count = 0;
        }
    }

    let password = passwordArr.reverse().join('');
    console.log(`Your generated password is ${password}`);
}

passwordGenerator([
'ilovepizza',
'ihatevegetables',
'orange'
]);
