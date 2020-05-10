let random
let endValue = 9
let counter=0
// console.log(`counter = ${counter} & Random number = ${random}`)

while(random !== endValue){
    random = Math.round(Math.random() * 10)
    counter++
}
console.log(`counter = ${counter} & Random number = ${random}`)

//OR DO WHILE

// do {
//     random = Math.round(Math.random() * 10)
//     counter++
//     console.log(`counter = ${counter} & Random number = ${random}`)
// }while(random !== endValue)



let sentence = 'The brown bear jumped over the Big fence!'

// console.log('text'.charAt())

let count = 0;
let loc = 0;
let num = 3
let letter = 'b'
sentence = sentence.toLowerCase()
while ( count < num && loc < sentence.length){
    if (sentence.charAt(loc) === letter){
        count++
        
        console.log(`At the index ${loc + 1} is our b number ${count}`)
        
    }
    loc ++
}
console.log(sentence.slice(--loc))