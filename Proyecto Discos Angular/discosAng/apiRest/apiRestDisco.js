let mysql = require("mysql");
let cors = require("cors")
let connection = mysql.createConnection({
    host: "localhost",
    database: "angular",
    user: "root",
    password: null

});
connection.connect();

const { response } = require('express');
const express = require("express");
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/discos",

    function (req, res) {

        let respuesta;
        id = req.query.id;

        if (!isNaN(req.query.id)) {

            let params = [id]
            let consulta = "SELECT * FROM discos WHERE id=?"
            connection.query(consulta, params, function (error, resultado) {

                if (error) {
                    res.send({error:true,mensaje:"disco inexistente"})
                
                } else {
                    if (resultado.length == 0) {
                        res.send({ mensaje: 'No existe el disco' })
                        console.log(res, resultado)
                    } else {
                        res.send(resultado)
                    }
                }

            })



        } else {
            let consulta = "SELECT * FROM discos"
            connection.query(consulta, function (error, resultado) {
                if (error) {
                    respuesta = error
                } else {
                    respuesta = resultado
                }
                res.send(respuesta)

            })
        }
    }
);


app.post("/discos",
    function (req, res) {
        let respuesta;

        let titulo = req.body.titulo
        let interprete = req.body.interprete
        let anyoPublicacion = req.body.anyoPublicacion
        


        let params = [titulo, interprete,anyoPublicacion]
        let sqlInsertAl = "INSERT INTO discos (titulo,interprete,anyoPublicacion) VALUES (?,?,?)"
        connection.query(sqlInsertAl, params, function (error, resultado) {

            if (error) {
                if (error.code == "ER_BAD_NULL_ERROR") {
                    res.send({ mensaje: 'No puedes introducir un valor nulo'})
                }
                else response.send(error)
            } else {
                console.log(resultado);
                res.send({ mensaje: 'disco añadido con ID: ' + resultado.insertId})
            }
        })

    }


)

app.put("/discos",
    function (req, res) {
        let titulo = req.body.titulo
        let interprete = req.body.interprete
        let anyoPublicacion = req.body.anyoPublicacion
        let id = req.body.id
        let params = [titulo, interprete,anyoPublicacion, id]
        if (req.body.id == null) {
            res.send({ mensaje: "Introduce un id" })
        } else {



            let sqlInsertAl = 'UPDATE discos SET titulo = COALESCE(?,titulo),interprete = COALESCE(?,interprete),anyoPublicacion = COALESCE(?,anyoPublicacion) WHERE id=?'

            connection.query(sqlInsertAl, params, function (error, resultado) {

                if (error) {

                    res.send(error)
                } else {
                    if (resultado.affectedRows == 0) {
                        res.send({ mensaje: 'No existe el id',resultado:resultado })
                    } else {
                        res.send({ mensaje: 'Disco modificado',resultado:resultado })
                    }
                }
            })



        }
    })

app.delete("/discos",
    function (req, res) {
        let id = req.query.id;
        let params = [id]
        let consulta = "DELETE FROM discos WHERE id=?"
        connection.query(consulta, params, function (error, resultado) {
            if (error) {

                res.send(error)
            } else {
                if (resultado.affectedRows == 0) {
                    res.send({ mensaje: 'No existe el id' })
                } else {
                    res.send({ mensaje: 'Disco borrado' })
                }
            }
        })



    }
)
app.use(function(request, response, next){
    respuesta = {codigo: 404, mensaje: "URL no encontrado"}
    response.status(404).send(respuesta)
})
app.listen(3000)