function pascalCaseSplitter(str)
{
    let finalStrArr = Array.from(str.split(/(?=[A-Z])/));
    console.log(finalStrArr.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')