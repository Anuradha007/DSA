
 function wordCounter(text) {
    const lowerText = text.toLowerCase();

    const wordMap = {}

    const words = lowerText.split(" ");
    console.log(words);

    for(const word of words) {
        if(word in wordMap) {
            wordMap[word]++
        } else {
            wordMap[word] = 1;
        }
    }
    return wordMap;
    
 }

 const text = "Hello my name name name is shikha";
console.log( wordCounter(text));
;