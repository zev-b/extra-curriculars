"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
function getProfit(movieObj) {
    return movieObj.boxOffice.grossWorldwide - movieObj.boxOffice.budget;
}
// or: destructure for less verbatim
function getProfit2(movie) {
    var _a = movie.boxOffice, grossWorldwide = _a.grossWorldwide, budget = _a.budget;
    return grossWorldwide - budget;
}
// or: destructure already in the function param
function getProfit3(_a) {
    var _b = _a.boxOffice, grossWorldwide = _b.grossWorldwide, budget = _b.budget;
    return grossWorldwide - budget;
}
// For example...
// getProfit(cats) => -21166652
console.log(getProfit(dune));
console.log(getProfit2(cats));
console.log(getProfit3(dune));
