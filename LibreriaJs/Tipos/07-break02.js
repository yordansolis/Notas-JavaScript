/******************brear*/

const n1 = [1, 2, 3, 4, 5, 22, 3];
for (let i = 0; i < n1.length; i++) {
    if (i === 5) {
        break;// cuando y sea igual a 5 pare 
    }
    console.log(n1[i]);
}


/*******************continue*/
const n2 = [1, 2, 3, 4, 5, 22, 3];
for (let i = 0; i < n2.length; i++) {
    if (i === 5) {
        continue;// esta propiedad onmite lo que esta a si lado y sige 
        ejecutando
    }
    console.log(n2[i]);
}
