function arrayManipulator(arr, commands) {
    let isPrint = false;
    for(let commandData of commands)
    {
        commandData = commandData.split(' ');
        let command = commandData.shift();
        let index = 0;
        let element = 0;

        switch(command)
        {
            case 'add':
                index = Number(commandData[0]);
                element = Number(commandData[1]);
                arr.splice(index, 0, element);
                break;
            case 'addMany':
                index = Number(commandData.shift());
                let commandDataLength = commandData.length;
                while(commandDataLength > 0)
                {
                    let num = Number(commandData.shift());
                    commandData.push(num);
                    commandDataLength--;
                }
                arr.splice(index, 0, ...commandData);
                break;
            case 'contains':
                element = Number(commandData[0]);
                if(arr.includes(element))
                {
                    console.log(arr.indexOf(element));
                }
                else
                {
                    console.log(-1);
                }
                break;
            case 'remove':
                index = Number(commandData.shift());
                arr.splice(index, 1);
                break;
            case 'shift':
                let num = Number(commandData.shift());
                for(let i = 0; i < num; i++)
                {
                    arr.push(arr.shift());
                }
                break;
            case 'sumPairs':
                let arr1 = [];
                let i = 0;
                if(arr.length % 2 !== 0)
                {
                    arr.push(0);
                }
                while(arr1.length < arr.length/2)
                {
                    let sum = arr[i] + arr[i + 1];
                    arr1.push(sum);
                    i += 2;
                }

                arr = arr1;
                break;
            case 'print':
                isPrint = true;
                console.log(`[ ${arr.join(', ')} ]`);
                break;
        }

        if(isPrint)
        {
            break;
        }
    }
}


arrayManipulator([2, 2, 4, 2, 4],
["add 1 4", "sumPairs", "print"])
