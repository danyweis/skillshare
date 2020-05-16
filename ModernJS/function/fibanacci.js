

let fibonacci = (len) => {
    let num1 = 0
    let num2 = 1
    let toPush = 0
    const arr = []
    len-- // do -- because the first time we push 2 numbers
    for (let i =0; i < len; i++){
        if (toPush === 0){
            arr.push(num1,num2)
            toPush = num1 + num2
            num1 = num2
            num = toPush
            continue;
        }
        arr.push(toPush)
        toPush = num1 + num2
        num1 = num2
        num2 = toPush
    }    
    return arr
}
console.log(fibonacci(10))


// other way

let fibSeq = (len) => {

    let seq = [0,1]
    
    for (let i = 2; i < len; i++){
        seq[i] = seq[i-1] + seq[i-2]
    }
    return seq
}
console.log(fibSeq(7))

