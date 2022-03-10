const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');


console.clear();

console.log(argv);

// Asi se obtendrian los datos sin yargs
// const [ , , arg3 = 'base=5'] = process.argv;
// const [,base = 1] = arg3.split('=');

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(colors.yellow(nombreArchivo), 'creado'.yellow))
    .catch(err => console.log(err));

