function computerStore(arr)
{
    let index = 0;
    while(arr[index] != 'special' && arr[index] != 'regular')
    {
        if(arr[index] <= 0)
        {
            console.log('Invalid price!');
            arr.splice(index, 1);
            index--;
        }

        index++;
    }

    index = 0;
    let allFees = 0;
    let priceWithoutFees = 0;


    while(arr[index] != 'special' && arr[index] != 'regular')
    {
        allFees += arr[index] / 5;
        priceWithoutFees += Number(arr[index]);
        index++;
    }

    let fullPrice = priceWithoutFees + allFees;

    if(fullPrice <= 0)
    {
        console.log('Invalid order!');
    }
    else
    {
        if(arr[arr.length - 1] == 'special')
        {
            fullPrice -= fullPrice / 10;
        }
        
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutFees.toFixed(2)}$`);
        console.log(`Taxes: ${allFees.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${fullPrice.toFixed(2)}$`);
    }
}

computerStore(['1050','200','450','2','18.50','16.86','special']);