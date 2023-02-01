import { Express } from "express";

const app = Express();



app.get('/saludo', (req, res)=>{
    res.send('hola a todos desde express')

})

app.get('/bienvenido', (req,res)=>{
    res.send(`<h1 style="color:blue;">bienenido a mi primer servidor express</h1>`)
})

app.listen(8080,()=>console.log('Listening on port 8080'))
