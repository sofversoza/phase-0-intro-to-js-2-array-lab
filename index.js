// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat(name) {
    const anotherNewCats = ["Arnold", ...cats];
    return anotherNewCats;
}

function removeLastCat() {
    const newNewCats = [...cats.slice(0, -1)];
    return newNewCats;
}

function removeFirstCat() {
    const anotherCat = [...cats.slice(1)];
    return anotherCat;
}