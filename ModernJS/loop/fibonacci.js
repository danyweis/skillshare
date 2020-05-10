// console.log fibonacci numbers until 1000
let count = 1
let num1 = 1
let num2 = 1
let result ='0, 1'

while(count <= 1000){
    if (count == 1){
        result = `${result} ,${count}`
        count = num1 + num2
        num2 = count
    }else{
        (num1<num2)?num1 = count:num2 = count;
    }
    result = `${result} ,${count}`
    count = num1 + num2
}
console.log(result)

// FROM THE COURSE BUT DOES NOT SHOW 0,1,1,2... BUT 0,1,2...

let fibSeq = ''
let n1 = 0
let n2 = 1
let newN = 0 

while (newN <= 1000){
    fibSeq += newN + ", "
    newN = n1 + n2
    n1 = n2
    n2 = newN
}
console.log(fibSeq.slice(0, -2))