function treasureHunt(arr)
{
    
    let startContents = arr[0].split('|');

    let index = 1;
    while(arr[index] != 'Yohoho!')
    {
        let commandInfo = arr[index].split(' ');
        let command = commandInfo[0];

        switch(command)
        {
            case 'Loot':
                for(let i = 1; i <= commandInfo.length - 1; i++)
                {
                    if(!(startContents.includes(commandInfo[i])))
                    {
                        startContents.unshift(commandInfo[i]);
                    }
                }
                break;
            case 'Drop':
                if(Number(commandInfo[1]) > startContents.length - 1 || Number(commandInfo[1]) < 0)
                {
                    break;
                }

                let replace = startContents.splice(commandInfo[1], 1);
                startContents.push(String(replace));

                break;
            case 'Steal':
                if(commandInfo[1] >= startContents - 1)
                {
                    startContents.length = 0;
                    break;
                }

                let stealed = startContents.splice(startContents.length - commandInfo[1], commandInfo[1]);
                console.log(stealed.join(', '));
                break;
        }
        index++;
    }

    let average = 0;
    for(let i = 0; i < startContents.length; i++)
    {
        average += startContents[i].length;
    }

    average /= startContents.length;

    if(startContents.length > 0)
    {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }
    else
    {
        console.log('Failed treasure hunt.');
    }
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);