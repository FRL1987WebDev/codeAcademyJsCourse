let input = "hello i am a whale nice to meet you!"; 

const vowels = ['a','e','i','o','u'];

let resultArray = [];

for (let x = 0; x < input.length; x ++) {
  for (let j = 0; j < vowels.length; j ++) {
    if (input[x] === vowels[j]) {
      resultArray.push(input[x])
    } 
  } if (input[x] === 'e') {
      resultArray.push(input[x])
     } if (input[x] === 'u') {
        resultArray.push(input[x])
} 
}


resultArray = resultArray.join('');
resultArray = resultArray.toUpperCase();
console.log(resultArray);