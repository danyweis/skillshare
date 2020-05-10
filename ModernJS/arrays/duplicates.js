// Remove all duplicates from this array

let fruits = ['banana','kiwi','mango','kiwi','apple','kiwi','pear', 'banana', 'apple']
let len = 0;
while (len !== fruits.length){
    if(fruits.lastIndexOf(fruits[len])  === fruits.indexOf(fruits[len])){
    }else{
        while(fruits.lastIndexOf(fruits[len])  !== fruits.indexOf(fruits[len])){
            fruits.splice(fruits.lastIndexOf(fruits[len]),1)
        }
    }
    len++;
}

console.log(fruits)

// OTHER WAY 

let fruitsOther = ['banana','kiwi','mango','kiwi','apple','kiwi','pear', 'banana', 'apple']

fruitsOther.sort()

for (let i = 0; i< fruitsOther.length;){
    (fruitsOther[i] === fruitsOther[i + 1])?fruitsOther.splice([i + 1], 1) : i++;
}

console.log('new: ' + fruitsOther)

// OR BACKWARDS

let fruitsO = ['banana','kiwi','mango','kiwi','apple','kiwi','pear', 'banana', 'apple']

fruitsO.sort()

for (let i = fruitsO.length; i> 0 ; i--){
    if(fruitsO[i] === fruitsO[i - 1]) {
        fruitsO.splice([i], 1)
    } 
}

console.log('new backwards loop: ' + fruitsO)