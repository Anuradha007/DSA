const isPallindrome = ( str ) => {
    let reversedString = str.split("").reverse().join("");
    if(reversedString === str){
        return `${str} is Pallindrome!` ;
    } else {
        return `${str} ain't Pallindrome!` ;
    }
}

console.log(isPallindrome("abba"));
console.log(isPallindrome("hello"));
