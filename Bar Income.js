function barIncome(arr){
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<qty>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/;

    let command = arr.shift();
    let totalIncome = 0;

    while(command !== 'end of shift')
    {
        let matched = command.match(pattern);

        if(matched)
        {
            let {name, product, qty, price} = matched.groups;
            let total = Number((price * qty));
            console.log(`${name}: ${product} - ${(total).toFixed(2)}`);
            totalIncome += total;
        }

        command = arr.shift();
    }

    console.log(`Total income: ${(totalIncome).toFixed(2)}`);
}


barIncome(
['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
);
