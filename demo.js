const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

console.log(person);

function updatedPerson(key, value) {
    const newPerson = {
        ...person,
    };

    newPerson[key] = value;

    return newPerson;
}

function updatedPerson2(key, value) {
    return {
        ...person,
        [key]: value,
    };
}

const p1 = updatedPerson2('name', 'Maryte');

console.log(p1);

const p2 = updatedPerson2('age', 88);

console.log(p2);
