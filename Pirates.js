function pirates(arr) {
    let targets = new Map();
    let cityData = arr.shift().split('||');
    while(!cityData.includes('Sail'))
    {
        let city = cityData[0];
        let population = Number(cityData[1]);
        let gold = Number(cityData[2]);

        if(!targets.has(city))
        {
            targets.set(city, {population: population, gold: gold});
        }
        else
        {
            targets.set(city, 
            {population: targets.get(city).population += population, 
            gold: targets.get(city).gold += gold});
        }

        cityData = arr.shift().split('||');
    }

    let commandData = arr.shift().split('=>');

    while(!commandData.includes('End'))
    {
        let command = commandData[0];
        let city = commandData[1];

        if(command === 'Plunder')
        {
            let deceased = Number(commandData[2]);
            let stolenGold = Number(commandData[3]);

            targets.set(city, 
            {population: targets.get(city).population -= deceased, 
            gold: targets.get(city).gold -= stolenGold});

            console.log(`${city} plundered! ${stolenGold} gold stolen, ${deceased} citizens killed.`);

            if(targets.get(city).population <= 0 || targets.get(city).gold <= 0)
            {
                console.log(`${city} has been wiped off the map!`);
                targets.delete(city);
            }
        }
        else
        {
            let addedGold = Number(commandData[2]);

            if(addedGold < 0)
            {
                console.log('Gold added cannot be a negative number!');
                commandData = arr.shift().split('=>');
                continue;
            }

            targets.set(city, 
            {population: targets.get(city).population, 
            gold: targets.get(city).gold += addedGold});

            console.log(`${addedGold} gold added to the city treasury. ${city} now has ${targets.get(city).gold} gold.`)
        }

        commandData = arr.shift().split('=>');
    }

    let leftedTargets = targets.size;

    if(leftedTargets > 0)
    {
        console.log(`Ahoy, Captain! There are ${leftedTargets} wealthy settlements to go to:`);

        for(let city of targets.keys())
        {
            console.log(`${city} -> Population: ${targets.get(city).population} citizens, Gold: ${targets.get(city).gold} kg`);
        }
    }
    else
    {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
