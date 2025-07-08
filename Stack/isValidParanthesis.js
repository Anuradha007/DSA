  let isValidParanthesis = ( str ) => {

    const stack = [];

    const brackets = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }

    for(let char of str) {

        if(brackets[char]) {

            stack.push(char);
          //  console.log(stack);
            

        } else {

           const top = stack.pop();
          //  console.log(top);
            
           if(!top || brackets[top] !== char) {
            return false;
            
           }
        }
    }

    return stack.length === 0;

  }

  console.log(isValidParanthesis("()[]{}"));
  console.log(isValidParanthesis("([)]"));
  console.log(isValidParanthesis("()"));
  console.log(isValidParanthesis("("));
  