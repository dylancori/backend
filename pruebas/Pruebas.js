class Contador {
    constructor (responsable) {
        this.responsable = responsable;
        this.conteo = 0; 

    }
    static contadorGlobal = 0;

    getResponsable = ()  =>{
        return this.responsable;

    }

    contar = () => {
        this.conteo++;
        Contador.contadorGlobal ++;

    }
    getCuentaIndividual = () => {
        return this.conteo
    }
     getCuentaGlobal = () =>{
        return Contador.contadorGlobal;
     }
}
const contador = new Contador('mauro');
contador.contar();
contador.contar();
console.log(contador.getCuentaIndividual());
console.log(contador.getCuentaGlobal());

const contador1 = new Contador('joaco')
contador.contar();
contador.contar();
console.log(contador.getCuentaIndividual())
console.log(contador.getCuentaGlobal())

const contador2 = new Contador('juan')
contador.contar();
contador.contar();
console.log(contador.getCuentaIndividual())
console.log(contador.getCuentaGlobal())
