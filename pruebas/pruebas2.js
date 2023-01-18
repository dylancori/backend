// const valoresBase = [1,2,3,4,5,6];
//                      0,1,2,3,4,5

// const nuevosValores = valoresBase.map((numero, indice)=>numero**indice)

// console.log(nuevosValores)

// const nombre = ['alex','Camilo','nico','mariano']

// if (nombre.includes('camilo')) {
//     console.log('si esta dentro del array')
// }else{
//     console.log('no esta dentro del array')
// }







// const objeto = {
//     impuesto1: 12,
//     impuesto2: 42,
//     impuesto3: 36,
    
// }

// const entradas=Object.entries(objeto)
// console.log(entradas)

// const claves = Object.keys(objeto)
// console.log(claves)

// const valores = Object.values(objeto)
// console.log(valores)

// const impuestosTotales =valores.reduce((valorInicial, valorAcumulado)=> valorAcumulado + valorInicial)
// console.log(impuestosTotales)



// const objeto = {
//     propiedad1: 2,
//     propiedad2: 'b',
//     propiedad3: true
// }


// const objeto1 = {
//     propiedad1: 'c',
//     propiedad2: [1,2,3,4,5],
// }


// const {propiedad1, propiedad2} = objeto
// console.log(propiedad1)
// console.log(propiedad2)

// const objetoResultado = { ...objeto, ...objeto1 };
// console.log(objetoResultado)
// const propiedad1 = objeto.propiedad1;
// console.log(propiedad1)




// rest opetator
// const objetoRest = {
//     a:1,
//     b:2,
//     c:3
// }

// const {a,...rest} = objetoRest
// console.log(rest)

const objetos = [
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2
    },
    
{
        manzanas:1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
]

let newArray = [];
let total = 0;

objetos.forEach(objeto=>{
    const keys = Object.keys(objeto);
    const values = Object.values(objeto);

    total += values.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);
    keys.forEach(key=>{
        if(!newArray.includes(key)) newArray.push(key);
    })
})

console.log(newArray);
console.log(total);
 