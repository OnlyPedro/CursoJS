let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*
varTemp = varA
varA = varB
varB = varC
varC = varTemp
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

