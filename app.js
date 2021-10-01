const { crearArchivos } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


// const base = 3;
console.clear();

console.log(argv);

console.log('parmetro base = ', argv.b);
console.log('parmetro l = ', argv.l);

crearArchivos(argv.b, argv.l, argv.h)
    .then( msg => console.log(msg))
    .catch( err => console.log(err))




/*
console.log(process.argv); //agumentos de la consola
                        //node app --base = 5 (es el tercerargumento)

const [ arg1, arg2, arg3 = 'base=3'] = process.argv; //al arg3 se le pone valor por default

console.log(arg1);
console.log(arg2);
console.log(arg3); // esta varaible tiene --base=9

const [, base1 ] = arg3.split('='); //separa el contenido con el = en 2 derecha e izquierda

console.log(base1); 

crearArchivos(base1)
    .then( msg => console.log(msg))
    .catch( err => console.log(err))

*/


