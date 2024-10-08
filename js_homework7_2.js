const text = "Wonderful, Joyful, Happiness, Time, Task, Apple";
const regex = /\b[^Aa\s]{6,}\b/g;

const answer = text.match(regex);
console.log(answer);