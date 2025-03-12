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

const cardToRemove = 'Карточка-3'

const indexOfElement = cards.indexOf(cardToRemove);
cards.splice(indexOfElement, 1)

const cardToInsert = 'Карточка-6'
cards.push(cardToInsert)

const cardToUpdate = 'Карточка-4'

const indexOfElemenx = cards.indexOf(cardToUpdate);
cards.splice(indexOfElemenx, 1, 'Оновлена карточка-4')
console.table(cards);