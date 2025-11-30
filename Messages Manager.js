function messagesMenager(arr) { 
    let users = new Map();
    let capacity = Number(arr.shift());

    let commandData = arr.shift().split('=');
    let command = commandData.shift();

    while(command !== 'Statistics')
    {
        switch(command)
        {
            case 'Add':
                let username = commandData.shift();
                let sent = Number(commandData.shift());
                let received = Number(commandData.shift());

                if(!users.has(username))
                {
                    users.set(username, {sent: sent, received: received});
                }
                break;

            case 'Message':
                let [sender, reciever] = commandData;

                if(users.has(sender) && users.has(reciever))
                {
                    users.set(sender,
                         {sent: users.get(sender).sent + 1,
                         received: users.get(sender).received});

                    users.set(reciever,
                         {sent: users.get(reciever).sent,
                         received: users.get(reciever).received + 1});
                }

                if(users.get(sender).sent + users.get(sender).received === capacity)
                {
                    users.delete(sender);
                    console.log(`${sender} reached the capacity!`);
                }

                if(users.has(reciever) && users.get(reciever).sent + users.get(reciever).received === capacity)
                {
                    users.delete(reciever);
                    console.log(`${reciever} reached the capacity!`);
                }
                break;

            case 'Empty':
                let userToDelete = commandData.shift();

                if(userToDelete === 'All')
                {
                    users.clear();
                }

                if(users.has(userToDelete))
                {
                    users.delete(userToDelete);
                }
                break;
        }

        commandData = arr.shift().split('=');
        command = commandData.shift();
    }

    console.log(`Users count: ${users.size}`);
    
    for(let key of users.keys())
    {
        console.log(`${key} - ${users.get(key).sent + users.get(key).received}`);
    }
}


messagesMenager(["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"])






