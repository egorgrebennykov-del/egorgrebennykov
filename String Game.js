function stringGame(arr) { 
    let str = arr.shift();
    let commandData = arr.shift();
    commandData = commandData.split(' ');
    let command = commandData.shift();
    
    while(command !== 'Done')
    {
        switch(command)
        {
            case 'Change':
                let [char, replacement] = commandData;
                str = str.replaceAll(char, replacement);
                console.log(str);
                break;

            case 'Includes':
                let value = commandData;

                if(Array.from(str).join('').includes(value))
                {
                    console.log('True');
                }
                else
                {
                    console.log('False');
                }
                break;

            case 'End':
                let substr = commandData.shift();

                if(str.substr(str.length - substr.length) === substr)
                {
                    console.log('True');
                }
                else
                {
                    console.log('False');
                }
                break;

            case 'Uppercase':
                str = str.toUpperCase();
                console.log(str);
                break;

            case 'FindIndex':
                let charToFind = commandData.shift();

                let index = Array.from(str).indexOf(charToFind);
                console.log(index);
                break;
                
            case 'Cut':
                let startIndex = Number(commandData.shift());
                let count = Number(commandData.shift());

                str = str.substr(startIndex, count);
                console.log(str);
                break;
        }

        commandData = arr.shift();
        commandData = commandData.split(' ');
        command = commandData.shift();
    }
}


stringGame(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])


