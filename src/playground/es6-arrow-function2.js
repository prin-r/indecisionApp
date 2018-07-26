
const add = (a,b) => {
    return a + b;
}

console.log(add(55,1));


const user = {
    name: 'mumu',
    cities: ['a','b','c'],
    printCities() {
        return this.cities.map( (city) => this.name + ' has lived in ' + city + '?');
    }
};

console.log(user.printCities());


const multiplier = {
    numbers: [10,20,30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map( (x) => x * this.multiplyBy);
    }
};

console.log(multiplier.multiply());