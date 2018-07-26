class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi. I am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name,age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major} .`;
        }
        return description;
    }
};

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGretting() {
        return super.getGretting() + ((this.homeLocation) ? ` I am visiting from ${this.homeLocation}.`:``);
    }
}

const me = new Traveler('mumu kabigon', 1, 'CP');
const momo = new Student('momo toto',0.9);

const other = new Traveler(undefined, undefined, 'Nowhere');

console.log(me.getGretting());

console.log(other.getGretting());