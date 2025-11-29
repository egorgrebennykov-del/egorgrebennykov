function companyUsers(arr) {
    let companiesList = new Map();

    for(let element of arr)
    {
        let [companyName, id] = element.split(' -> ');

        if(!companiesList.has(companyName))
        {
            companiesList.set(companyName, [id]);
        }
        else
        {
            let idArr = companiesList.get(companyName);
            if(idArr.includes(id))
            {
                continue;
            }

            idArr.push(id);
            companiesList.set(companyName, idArr);
        }
    }
    let keysArr = Array.from(companiesList.keys()).sort();
    for(let key of keysArr)
    {
        console.log(key);
        let idArr = Array.from(companiesList.get(key).sort((a, b) => {
        let numA = parseInt(a.slice(0, 2));
        let numB = parseInt(b.slice(0, 2));
        return numA - numB;}));
        for(let element of idArr)
        {
            console.log(`-- ${element}`);
        }
    }
}


companyUsers([
'SoftUni -> QQ12345',
'SoftUni -> CC12344',
'Lenovo -> XX23456',
'SoftUni -> AA12345',
'Movement -> DD11111'
])
