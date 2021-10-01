
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base usada para generar el archivo de multiplicar'
    })
    .option( 'l',{
        alias: 'listar',
        type: 'boolean',
        describe: 'Valor que permite listar el archivo de multiplicar en pantalla',
        default: false
    })
    .option( 'h',{
        alias: 'hasta',
        type: 'number',
        describe: 'Valor hasta para generar',
        default: 10
    })
    //argv es la salida... es decir la que esta al final.
    .check( ( argv, options) => {
        if ( isNaN(argv.b) ){
            throw 'el parametro base debe ser un numero'
        }
        return true //si no hay error se devuelve un true
    })
    .argv;

module.exports = argv;
