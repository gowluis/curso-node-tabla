const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();


//console.log(process.argv);

//console.log(argv);

//console.log('base: yargs', argv.base);



// const [, , arg3] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);
//const base = 8;
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log('Archivo creado'.rainbow))
    .catch(err => console.log(err))