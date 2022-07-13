require('colors');
const argv = require('./config/yargs');
const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

//console.log(process.argv);
//console.log(argv);

// const [,,arg3='base=5']=process.argv;
// const [,base] = arg3.split('=');

console.log("asdaf");

crearArchivo(argv.b,argv.l,argv.h)
    .then(tabla=>console.log(tabla.rainbow))
    .catch(err=>console.log(err));