function movies(arr)
{
    let arrOfObj = [];

    for(let element of arr)
    {

        if(element.includes('addMovie'))
        {
            let movieName = element.split('addMovie ');

            let movieObj = {name: movieName[1]};
            arrOfObj.push(movieObj);

        } else if(element.includes('directedBy'))
        {
            let [movieName, directorName] = element.split(' directedBy ');

            let movie = arrOfObj.find(movieObj => movieObj.name === movieName);

            if(movie)
            {
                movie.director = directorName;
            }
        }
        else if(element.includes('onDate'))
        {
            let [movieName, dateOfMovie] = element.split(' onDate ');

            let movie = arrOfObj.find(movieObj => movieObj.name === movieName);

            if(movie)
            {
                movie.date = dateOfMovie;
            }
        }
    }

    for(let element of arrOfObj)
    {
        if(element.name && element.date && element.director)
        {
            console.log(JSON.stringify(element));
        }
    }
}

movies([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis FordCoppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
])