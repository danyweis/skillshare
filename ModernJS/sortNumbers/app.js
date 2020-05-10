let a=6 , 
    b=-5 , 
    c=2;

if (a<b && a<c){
    (b<c)?result = (`${a},${b},${c}`):result = (`${a},${c},${b}`)
    // if(b<c){
    //     result = (`${a},${b},${c}`)
    // }else{
    //     result = (`${a},${c},${b}`)
    // }
}else if (b<a && b<c){
    (a<c)?result = (`${b},${a},${c}`):result = (`${b},${c},${a}`)
    // if(a<c){
    //     result = (`${b},${a},${c}`)
    // }else{
    //     result = (`${b},${c},${a}`)
    // }
} else if (c<b && c<a){
    (a<b)?result = (`${c},${a},${b}`):result = (`${c},${b},${a}`)
    // if(a<b){
    //     result = (`${c},${a},${b}`)
    // }else{
    //     result = (`${c},${b},${a}`)
    // }
}

console.log(result)