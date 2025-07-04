class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push( item ) {
        this.data[this.length] = item; 
        this.length++;
        return this.length;
        console.log("----" , this.data[this.length]);
    }

    get( index ) {
        return this.data[index]
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--;
        return lastItem;
    }

    shift() {
        const firstItem = this.data[0];

        for(let z = 0; z < this.length; z++){
            this.data[z] = this.data[z + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    // unshift( item ){
    //     this.data[0] = item;

    //     for(let z = 0; z < this.length ; z++){
    //         this.data[]
    //     }

    //     this.length++;
    //     return this.length;
    // }

    deleteByIndex( index ) {
        const item = this.data[index];

        for(let z = index; z < this.length - 1; z++){
            this.data[z] = this.data[z + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
}


const myNewArr = new MyArray(); 
// console.log(myNewArr); 
console.log(myNewArr.push("Apple"));
console.log(myNewArr.push("Banana"));
console.log(myNewArr.push("cherry"));
console.log(myNewArr.push("mango"));
console.log(myNewArr.data);
console.log(myNewArr.get(1));
// console.log(myNewArr.pop());
// console.log(myNewArr.pop());
console.log(myNewArr.shift());
console.log(myNewArr.data);
console.log(myNewArr.deleteByIndex(1));
console.log(myNewArr.data);




