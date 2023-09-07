let num = 5;
let facto = 0;

for (let index1 = 1; index1 < 2; index1++) {
    for (let index2 = 1; index2 < num; index2++) {
        facto += index1 * index2
        index1++
    }
}
console.log(facto);

