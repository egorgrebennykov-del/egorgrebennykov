function race(arr){
    let participants = arr[0].split(', ');
    let participantsData = new Map();
    arr.shift();

    let command = arr.shift();

    while(command !== 'end of race')
    {
        let name = command.match(/[A-Za-z]/g).join('');
        let distArr = command.match(/\d/g);
        let dist = 0;

        for(let element of distArr)
        {
            dist += Number(element);
        }

        if(participants.includes(name))
        {
            if(!participantsData.has(name))
            {
                participantsData.set(name, dist);
            }
            else
            {
                participantsData.set(name, participantsData.get(name) + dist);
            }
        }

        command = arr.shift();
    }

    let participantsDataArr = Array.from(participantsData.entries()).map(([name, dist]) => ({name, dist}));
    participantsDataArr.sort((a, b) => b.dist - a.dist);


    console.log(`1st place: ${participantsDataArr[0].name}`);
    console.log(`2nd place: ${participantsDataArr[1].name}`);
    console.log(`3rd place: ${participantsDataArr[2].name}`);
}


race(
['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
);
