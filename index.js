import App from './config/app.js';

const port = process.env.APP_PORT || 8081;
//console.log(port);
App.app.listen(port, () => console.log(`API is running port: ${ port }` ));

//const express = require('express');
//const dotenv = require('dotenv');
//const { path } = require('express/lib/application');
//const app = express();

//dotenv.config();

//const port = process.env.APP_PORT || 8081;

//app.post('/' , (req, res) => { 
 //   res.send("Hola Mundo");
//});

//app.post('/data', (req, res) => { 
//    const data = req.body;
//    console.log('data from front', data);
//    res.json({
//        ok: true,
//        message: 'datos recibidos con éxito'
//    });
//});

//app.listen(port, () => {
//   console.log(`server started at http://localhost:${ port }` );
//} );

