// First way
// for (let i = 0; i < 11; i++) {
//    console.log(i)
// }

/*
answers = []
questions = [
    "What kind of your phone?",
    "Where are you from?",
    "Why are you here?"
]
for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i])
}
console.log(answers)
*/




//Second way
/*
let i = 0;
do {
    console.log(i)
    i++
}while (i<11)
*/

// Example with a second way
/*
answers = []
questions = [
    "What kind of your phone?",
    "Where are you from?",
    "Why are you here?"
]
let i = 0;
do {
    console.log(answers)
    i++
    answers[i] = prompt(questions[i])
}while (i < questions.length)
*/



// Third way
/*
let i = 0
while(i < 10) {
    console.log(i)
    i++
}*/



