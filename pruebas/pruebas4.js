// console.log('inicio de tareas')
// console.log('haciendo tarea 1')
// console.log('haciendo tarea 2')
// console.log('fin de tareas')

// const temporizador = (callback)=>{
//     setTimeout(()=>{
//         callback()
//     },3000)
// }
// let operacion = () => console.log('realizando operacion')
// console.log('inicio de tareas')
// temporizador(operacion)
// console.log('fin de tareas')

// console.log('inicio de tareas')
// console.log('haciendo tarea 1')
// for(let contador = 1;contador <=5;contador ++ ){
//     console.log(contador)
// }
// console.log('fin de tareas')

let contador = () =>{
    let valorContador = 1;
    console.log('realizando operacion')


let timer = setInterval(()=>{
    console.log(valorContador++)
    if (valorContador>5) {
        clearInterval(timer)
    }
},1000)
}
console.log('inicio de tareas')
contador();
console.log('fin de tareas')

