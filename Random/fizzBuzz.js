const fizzBuzz = (number) => {
    for(let z = 1; z <= number; z++){
        if(z % 3 === 0 && z % 5 === 0){
            console.log("FizzBuzz");   
        }else if(z % 3 === 0){
            console.log("Fizz"); 
        }else if(z % 5 === 0){
             console.log("Buzz"); 
        }else {
            console.log(z);
            
        }
    }
}

fizzBuzz(15);
