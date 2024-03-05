//1citapsiriq
let numbers =[2,15,85,95,415,47,58,441]
numbers.sort((a,b)=>b-a);
console.log(numbers);


//2citapsiriq
function calculateStringLengths(string) {
    const words = string.split(' ');
    const resultArray = words.map(word => {
        const length = word.length;
        return length;
    });
    return resultArray; 
}
const inputSum = "Bu tapsirigi yazanda heqiqetende isgence cekdim";
const result2 = calculateStringLengths(inputSum);
console.log(result2);
