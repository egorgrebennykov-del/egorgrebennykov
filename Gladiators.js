function gladiatorExpenses(lostFights, priceOfHelmet, priceOfSword, priceOfShield, priceOfArmor) {
    let expenses = 0;

    let isHelmetBroken = false;
    let isSwordBroken = false;
    let shieldBrokenCount = 0;

    for(let i = 1; i <= lostFights; i++)
    {
        if(i % 2 === 0)
        {
            expenses += priceOfHelmet;
            isHelmetBroken = true;
        }

        if(i % 3 === 0)
        {
            expenses += priceOfSword;
            isSwordBroken = true;
        }

        if(isHelmetBroken === true && isSwordBroken === true)
        {
            expenses += priceOfShield;
            shieldBrokenCount++;
        }

        if(shieldBrokenCount === 2)
        {
            expenses += priceOfArmor;
            shieldBrokenCount = 0;
        }

        isSwordBroken = false;
        isHelmetBroken = false;
    }

    console.log(`Gladiator expenses: ${(expenses).toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
