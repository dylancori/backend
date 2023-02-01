import { express } from "express";

const app = express();

const usuarios = [
    {id: 1, nombre:'mauricio', apellido:'espinosa', edad:25, genero:'M'}
    
]

app.get('/usuario:idUsuario', (req,res)=>{

})

