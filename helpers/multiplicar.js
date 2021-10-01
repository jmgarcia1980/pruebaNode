const fs = require('fs');
const colors = require('colors');

const crearArchivos = async ( res, listar, hasta ) =>{

    let salida = '';
    
    console.log('***********************************');
    console.log(`    Tabla del ${res}` .green);
    console.log('***********************************');

    for (let i = 1; i<= hasta; i++) {
        salida += `${res} * ${i} = ${res * i }\n` ;
    }

    ( listar )? console.log(salida .random) : console.log('nose lista nada' .red);;

    //es mas simple el otro
    // fs.writeFile(`tabla-${res}.txt`, salida, ( err ) =>{
    //     if (err) throw err;

    //     console.log(`Archivo tabla-${res}.txt creado con exito`);
    // })


    //se le define el path del archivo
    fs.writeFileSync(`./salida/tabla-${res}.txt`, salida );
    try {
        return `Archivo tabla-${res}.txt creado con exito`        
    } catch (error) {
        return error
    }

}

module.exports = {
    crearArchivos
}