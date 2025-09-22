function spiceMustFlow(startingYield) {
    let totalAmount = 0;
    let countDays = 0;
    for(let i = startingYield; i >= 100; i -= 10)
    {
        totalAmount += i;
        countDays++;
        totalAmount -= 26;
    }

    if(totalAmount >= 26)
    {
        totalAmount -= 26;
    }

    console.log(countDays);
    console.log(totalAmount);
}

spiceMustFlow(450);
