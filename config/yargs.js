const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                }).check((argv,options)=>{
                    if(isNaN(argv.base)){
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                }).check((argv,options)=>{
                    if(isNaN(argv.base)){
                        throw 'La base tiene que ser un true o false';
                    }
                    return true;
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'numero',
                    default: 10,
                    describe: 'limite de multiplicación'
                }).check((argv,options)=>{
                    if(isNaN(argv.base)){
                        throw 'El hasta tiene que ser un número';
                    }
                    return true;
                })  
                .argv;

module.exports = argv;