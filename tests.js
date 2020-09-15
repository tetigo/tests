let x = 9;
let arr2 = [];

function fib(x) {

    let a = 0;
    let b = 1;
    let f = 1;

    for (let i = 0; i < x; i++) {

        arr2.push(f);
        f = a + b;
        a = b;
        b = f;

    }
}

fib(x);
console.log(arr2)
//--------------------------------------------

let arr = [885.9, 984.9, 444.9, 528.9, 528.9];
let min = Math.min(...arr);
let max = Math.max(...arr);
let soma_total = arr.reduce((total, number) => total + number, 0)
let media = soma_total / arr.length
let maior_que_media = arr.filter(valor => valor > media)

console.log("min", min)
console.log("max", max)
console.log("soma_total", soma_total)
console.log("media", media)
console.log("maior_que_media", maior_que_media)

//--------------------------------

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53



valores = [
    { estado: "SP", valor: 67836.43, percent: 0 },
    { estado: "RJ", valor: 36678.66, percent: 0},
    { estado: "MG", valor: 29229.88, percent: 0},
    { estado: "ES", valor: 27165.48, percent: 0},
    { estado: "Outros", valor: 19849.53, percent: 0}
]
let total_valores = valores.map(item => item.valor).reduce((total, number) => total + number, 0)

valores.forEach(element => element.percent = element.valor * 100 / total_valores);

console.log(valores)



