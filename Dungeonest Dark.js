function dungeonestDark(str) {
    let health = 100;
    let coins = 0;

    let roomCounter = 0;

    let win = true;

    let rooms = str.split('|');

    for(let i = 0; i < rooms.length; i++)
    {
        let room = rooms[i].split(' ');

        roomCounter++;

        switch(room[0])
        {
            case 'potion':
                if(health + Number(room[1]) > 100)
                {
                   console.log(`You healed for ${100 - health} hp.`);
                   health = 100; 
                }
                else
                {
                    health += Number(room[1]);
                    console.log(`You healed for ${Number(room[1])} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += Number(room[1]);
                console.log(`You found ${Number(room[1])} coins.`);
                break;
            default:
                health -= Number(room[1]);
                break;
        }

        if(room[0] != 'potion' && room[0] != 'chest')
        {
            if(health > 0)
            {
                console.log(`You slayed ${room[0]}.`);
            }
            else
            {
                console.log(`You died! Killed by ${room[0]}.`);
                console.log(`Best room: ${roomCounter}`);
                win = false;
                break;
            }
        }
    }

    if(win)
    {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
