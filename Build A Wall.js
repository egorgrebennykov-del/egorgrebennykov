function buildAWall(walls) {
    let concreteWereUsed = new Map();
    let readyWalls = 0;
    let price = 0;

    while(readyWalls !== walls.length)
    {
        let dayNum = 0;
        for(let i = walls[readyWalls]; i < 30; i++)
        {
            dayNum++;
            let day = `${dayNum} day`;
            if(!concreteWereUsed.has(day))
            {
                concreteWereUsed.set(day, 195);
            }
            else
            {
                concreteWereUsed.set(day, concreteWereUsed.get(day) + 195);
            }

            price += 1900 * 195;
            walls[readyWalls]++;
        }

            if(walls[readyWalls] === 30)
            {
                readyWalls++;
            }
    }
    let concreteWereUsedArr = Array.from(concreteWereUsed.values());

    console.log(concreteWereUsedArr.join(', '));
    console.log(`${price} pesos`);
}


buildAWall([17, 22, 17, 19, 17])
