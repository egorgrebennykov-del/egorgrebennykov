function phoneShop(arr)
{
    let phoneList = arr[0].split(', ');

    let i = 0;

    while(arr[i] != 'End')
    {
        let commandDate = arr[i].split(' - ');
        let command = commandDate[0];

        switch(command)
        {
            case 'Add':
                if(!(phoneList.includes(commandDate[1])))
                {
                    phoneList.push(commandDate[1]);
                }
                break;

            case 'Remove':
                if(phoneList.includes(commandDate[1]))
                {
                    let index = phoneList.indexOf(commandDate[1]);
                    phoneList.splice(index, 1);
                }
                break;
                
            case 'Bonus phone':
                let phones = commandDate[1].split(':');

                if(phoneList.includes(phones[0]))
                {
                    let index = phoneList.indexOf(phones[0]);
                    phoneList.splice(index + 1, 0, phones[1]);
                }
                break;
            
            case 'Last':
                if(phoneList.includes(commandDate[1]))
                {
                    let index = phoneList.indexOf(commandDate[1]);
                    phoneList.splice(index, 1);

                    phoneList.push(commandDate[1]);
                }
                break;
        }
        i++;
    }

    console.log(phoneList.join(', '));
}

phoneShop(["HuaweiP20, XiaomiNote","Remove - Samsung","Bonus phone - XiaomiNote:Iphone5","End"]);