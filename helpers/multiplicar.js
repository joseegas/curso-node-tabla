const colors = require('colors');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = async(base = 5, listar=false, hasta=10) =>{

    let salida='';
    let consola='';

    for(let i=1;i<=hasta;i++){
        salida += `${base}${'x'}${i} ${'='} ${base*i}\n`;
        consola += `${base}${'x'.bgMagenta}${i} ${'='.green} ${base*i}\n`;
    }

    if(listar){
        console.log('===================='.red);
        console.log('Tabla del '+colors.yellow(base));
        console.log('===================='.blue);
        console.log(consola);
    }

    try{
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;
    }catch(error){
        throw error;
    }
}

module.exports = {
    crearArchivo
}