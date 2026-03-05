//.map => interesa más que los bucles for


const users = [
    {id: 1, name: 'Abel'},
    {id: 2, name: 'Julia'},
    {id: 3, name: 'Pedro'},
    {id: 4, name: 'Amanda'}
];

const names = users.map(user => user.name);

console.log(names);


const users2 = [
    {id: 1, name: 'Abel'},
    {id: 2, name: 'Julia'},
    {id: 3, name: 'Pedro'},
    {id: 4, name: 'Amanda'}
];

const transfNames = users2.map(user => {
    if (user.name.startsWith('A')) {
        return 'Anacleto';
    }
    return user.name;
});

console.log(transfNames);


const cities = [
    {isVisited: true, name: 'Tokyo'},
    {isVisited: false, name: 'Madagascar'},
    {isVisited: true, name: 'Amsterdam'},
    {isVisited: false, name: 'Seul'}
];

const cityList = cities.map(city => {
    return city.isVisited ? `${city.name} (Visitado)` : city.name;
});

console.log(cityList);