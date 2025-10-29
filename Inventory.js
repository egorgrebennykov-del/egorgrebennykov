function inventoryOfHeroes(arr)
{
    let heroes = [];
    for(let element of arr)
    {
        let heroInfo = element.split(' / ');

        let movieObj = {
            name: heroInfo[0],
            level: heroInfo[1],
            inventory: heroInfo[2]
        };

        heroes.push(movieObj);
    }

    heroes.sort((a, b) => a.level - b.level);

    for(let element of heroes)
    {
        console.log(`Hero: ${element.name}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.inventory}`);
    }
}

inventoryOfHeroes([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])