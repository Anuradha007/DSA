const reverseAnInteger = (num) => {
    return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
}

 console.log(reverseAnInteger(12345));
 console.log(reverseAnInteger(-110008));


