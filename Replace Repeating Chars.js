function replaceRepeatingChars(str) {
    let finishStr = '';
    for(let i = 0; i < str.length; i++)
    {
        if(str[i] === str[i + 1])
        {
            let finishInd = i;
            for(let j = i; j < str.length; j++)
            {
                if(str[j] !== str[i])
                {
                    break;
                }

                if(str[j] === str[i])
                {
                    finishInd = j;
                }
            }

            finishStr += str[i];
            i = finishInd;
        }
        else
        {
            finishStr += str[i];
        }
    }

    console.log(finishStr);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')