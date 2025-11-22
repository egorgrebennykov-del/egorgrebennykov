function imitationGame(arr) {
    let message = arr.shift();

    mainLoop: for(let element of arr)
    {
        let command = element.split('|')[0];

        switch(command)
        {
            case 'Move':
                let number = Number(element.split('|')[1]);
                message = message.slice(number) + message.slice(0, number);
                break;

            case 'Insert':
                let index = Number(element.split('|')[1]);
                let value = element.split('|')[2];
                message = message.slice(0, index) + value + message.slice(index);
                break;

            case 'ChangeAll':
                let subStr = element.split('|')[1];
                let replacement = element.split('|')[2];
                message = message.replaceAll(subStr, replacement); 
                break;
            default:
                break mainLoop;
        }
    }

    console.log(`The decrypted message is: ${message}`);
}


imitationGame(['zzHe',
'ChangeAll|z|l',
'Insert|2|o',
'Move|3',
'Decode'])
