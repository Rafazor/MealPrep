export default Data = function () {
        fetch('https://parseapi.back4app.com/classes/recipes', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'X-Parse-Application-Id': 'Ye6h65aZgGpHnha9EdBaZGnNc3WbgXkLGyu5v3KH',
                'X-Parse-REST-API-Key': '47BTLQqnXvRMn37KeoMmWw5dQ8WIezpwIaILj7mI'
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.results);
                return responseJson.results;
            })
            .catch((error) => {
                console.error(error);
            });
}