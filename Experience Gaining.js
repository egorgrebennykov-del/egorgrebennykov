function taxCalculator(arr)
{
    function fullTax(tax, decrease, extra, time, km, segment)
    {
        tax -= decrease * time;
        tax += extra * (Math.floor(km / segment));
        return tax;
    }

    let carsList = arr[0].split('>>');
    let sumOfTaxes = 0;

    for(let i = 0; i < carsList.length; i++)
    {
        let carInformation = carsList[i].split(' ');
        let startTax = 0;
        let annualDecrease = 0
        let extraPayment = 0;
        let taxSegment = 0;

        let isTypeValid = true;

        switch(carInformation[0])
        {
            case 'family':
                startTax = 50;
                annualDecrease = 5;
                extraPayment = 12;
                taxSegment = 3000;
                break;
            case 'heavyDuty':
                startTax = 80;
                annualDecrease = 8;
                extraPayment = 14;
                taxSegment = 9000;
                break;
            case 'sports':
                startTax = 100;
                annualDecrease = 9;
                extraPayment = 18;
                taxSegment = 2000;
                break;
            default:
                console.log('Invalid car type.');
                isTypeValid = false;
                break;
        }

        if(isTypeValid)
        {
            let tax = fullTax(startTax, annualDecrease, extraPayment, Number(carInformation[1]), Number(carInformation[2]), taxSegment);

            sumOfTaxes += tax;

            console.log(`A ${carInformation[0]} car will pay ${tax.toFixed(2)} euros in taxes.`);  
        }
    }

    console.log(`The National Revenue Agency will collect ${sumOfTaxes.toFixed(2)} euros in taxes.`);
}

taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]);