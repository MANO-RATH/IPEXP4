class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce() {
        return `My name is ${this.name}, I'm ${this.age} years old.`;
    }

    getDetails = () => {
        return `Person Details:
                Name: ${this.name}
                Age: ${this.age}
                Gender: ${this.gender}`;
    }
}

function PersonConstructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    
    this.introduce = function() {
        return `My name is ${this.name}, I'm ${this.age} years old.`;  // Fixed template literal
    }
}

const personObject = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    introduce: function() {
        return `My name is ${this.name}, I'm ${this.age} years old.`;  // Fixed template literal
    }
};

const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender,
        introduce() {
            return `My name is ${this.name}, I'm ${this.age} years old.`;  // Fixed template literal
        }
    };
};

const person1 = new Person("Alice Smith", 25, "Female");
console.log(person1.getDetails());

const person2 = new PersonConstructor("Bob Johnson", 30, "Male");
console.log(person2.introduce());

const person3 = createPerson("Charlie Brown", 35, "Male");
console.log(person3.introduce());
