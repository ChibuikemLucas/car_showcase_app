export async function fetchCars (){
    const headers = {	
        'x-rapidapi-key': 'ef38d5dcdbmsh69425693823ab08p17c326jsnc9411c6025c3',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{
        headers: headers,
    });

    const result = await response.json();

    return result;
}