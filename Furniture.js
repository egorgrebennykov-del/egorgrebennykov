function furniture(arr){
    let furnitureNames = [];
    let fullPrice = 0;
    let pattern = />>(?<name>\w+)<<(?<price>\d+(\.\d+)?)!(?<qty>\d+)/;

    let command = arr.shift();

    while(command !== 'Purchase')
    {
        let matched = command.match(pattern);

        if(matched)
        {
            let {name, price, qty} = matched.groups;
            furnitureNames.push(name);
            fullPrice += Number(price * qty);
        }
        command = arr.shift();
    }
    
    if(furnitureNames.length === 0)
    {
        console.log(`Bought furniture:`);
    }
    else
    {
        console.log(`Bought furniture: \n${furnitureNames.join('\n')}`);
    }

    console.log(`Total money spend: ${fullPrice.toFixed(2)}`);
}


furniture(
['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);
