function towns(arr)
{
    for(let townInfo of arr)
    {
        let townInfoArr = townInfo.split(' | ');

        let townObj = {
            town: townInfoArr[0],
            latitude: Number(townInfoArr[1]).toFixed(2),
            longitude: Number(townInfoArr[2]).toFixed(2)
        };

        console.log(townObj);
    }
}
towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']);