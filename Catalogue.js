function catalogue(arr)
{
    let objectsArr = [];
    let letterCodes = [];

    for(let element of arr)
    {
        let productObj = {
            name: (element.split(' : '))[0],
            price: Number((element.split(' : '))[1]),
        };

        let firstLetterCode = productObj.name.slice(0, 1).toUpperCase().charCodeAt(0);

        if(!letterCodes.includes(firstLetterCode))
        {
            letterCodes.push(firstLetterCode);  
        }

        objectsArr.push(productObj);
    }

    objectsArr.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

    while(letterCodes.length > 0)
    {
        let minLetter = Math.min(...letterCodes);

        console.log(String.fromCharCode(minLetter));

        let isFinish = false;

        while(!isFinish && objectsArr.length !== 0)
        {
            if(objectsArr[0].name.slice(0, 1).toUpperCase().charCodeAt() === minLetter)
            {
                console.log(`${objectsArr[0].name}: ${objectsArr[0].price}`);
                objectsArr.splice(0, 1);
            }
            else
            {
                isFinish = true;
            }
        }
        letterCodes.splice(letterCodes.indexOf(minLetter), 1);
    }
}

catalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])