let cant = 3;
let numeros = [2,4,6];
let suma = 0;
for (let index2 = 0; index2 <= cant; index2++) {
    suma = numeros[index2] + numeros[index2++];    
}
console.log(suma);