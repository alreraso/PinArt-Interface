//Trayendo operaciones
const operations = require(`./operations`); 


//Definicion del Servicio
let myService = {
    ss_2b: {
        funtions: {
            getAllTags: operations.getAllTags,
            getImagesByTag: operations.getImagesByTag
        }
    }
};


module.exports = myService



