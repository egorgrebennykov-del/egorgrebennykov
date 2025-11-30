function bossRush(arr) { 
    arr.shift();
    let pattern = /\|(?<name>[A-Z]+)\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/;

    for(let element of arr)
    {
        let matched = element.match(pattern);

        if(matched)
        {
            let {name, title} = matched.groups;
            
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armor: ${title.length}`);
        }
        else
        {
            console.log('Access denied!');
        }
    }
}


bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])


