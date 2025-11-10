function partyTime(arr) {
    let guests = [];

    for(let element of arr)
    {
        if(element === 'PARTY')
        {
            break;
        }

        if(element[0].charCodeAt(0) > 47 && element[0].charCodeAt(0) < 58)
        {
            guests.push({name: element, type: 'VIP'});
        }
        else
        {
            guests.push({name: element, type: 'Regular'});
        }
    }

    arr = arr.slice(arr.indexOf('PARTY') + 1);

    for(let element of arr)
    {
        if(guests.find(g => g.name === element))
        {
            guests.splice(guests.findIndex(g => g.name === element), 1);
        }
    }

    let sorted = guests.sort((a, b) => {
        if (a.type === b.type) return 0;        
        if (a.type === 'VIP') return -1;         
        return 1;                                  
    });

    console.log(sorted.length);
    for(element of sorted)
    {
        console.log(element.name);
    }
}


partyTime(['CA1234AA', 'CA1234AA', 'CA5678BB', '123456', "12345678", 'PARTY', 'CA1234AA', 'CA5678BB', "12345678"])