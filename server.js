'use strict';

const app = require('./app'),
    config = require('./config');


app.listen(config.PORT, () =>{

    console.log(`Servidor corriendo en: http://localhost:${config.PORT}`);
    
});