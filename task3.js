// Задание 3

function createObj() {
    return Object.create(null);
}

console.log(Object.getPrototypeOf(createObj()));
