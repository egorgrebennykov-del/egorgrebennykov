function factorialDivision(num1, num2)
{
    function findFactorial(num)
    {
        let factorial = 1;

        while(num > 1)
        {
            factorial *= num;
            num--;
        }

        return factorial;
    }

    let firstFactorial = findFactorial(num1);
    let secondFactorial = findFactorial(num2);

    console.log((firstFactorial / secondFactorial).toFixed(2));
}

factorialDivision(5, 2);