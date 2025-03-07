// 1
let words = ["River", "Cloud", "Laptop", "Garden", "Butterfly"]
let string = ""
for (const word of words) {
    console.log(words.join(", "));
}
console.log("---------------------------------");
// 2
const cards = [
'Карточка-1',
'Карточка-2',
'Карточка-3',
'Карточка-4',
'Карточка-5',
];
cards.splice(2, 1)
cards.push('Карточка-6')
cards[2] = "Карточка-8"
console.log(cards);