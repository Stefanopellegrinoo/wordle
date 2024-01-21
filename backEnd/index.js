const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const { Client } = require("pg")
const bodyParser = require('body-parser');
const config = require('./config');


const host = config.host;
const usuario = config.user;
const contraseña = config.password;
const nombreDeBD = config.database;
const puerto = config.port



const client = new Client({
  user: usuario,
  host: host,
  database: nombreDeBD,
  password: contraseña,
  port: puerto ,
  ssl:{
      rejectUnauthorized :false
  }
})

client.connect(function (err, client) {
  if (err) {
      console.log("error", err)
  }else {
      console.log("bien")
  }    
})


app.use(cors());



app.get('/api/data', async (req, res) => {
  try {
    const sql = "SELECT * FROM words"

    client.query(sql, (err,result)=>{
      let datos = result.rows
      if(err) return res.json(console.error(err))
      return res.json({Status:true, Result:datos})
  });
  } catch (error) {
    console.error('Error en la consulta a la base de datos:', error);
    res.status(500).send('Error interno del servidor');
  }
});


app.use(bodyParser.json());

app.post('/api/post', (req, res) => {
  const palabra = req.body.clave1

  console.log(palabra)
  const sql = "INSERT INTO words (word) VALUES ('"+ palabra +"');"

  client.query(sql, (err,result)=>{
      if(err) return (console.log(err))
      return res.json({Status:true})
  })
});



// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});
