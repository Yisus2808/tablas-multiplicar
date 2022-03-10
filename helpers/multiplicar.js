const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base, listar = false, hasta) => {

    try {
    
        let salida, clg = '';
    
        for(let i = 1; i <= hasta; i++) {
            clg += (`${colors.blue(base)} ${ 'x'.green} ${colors.blue(i)} ${ '='.green } ${colors.blue(base*i)}\n`);
            salida += (`${base} x ${i} = ${base*i}\n`);
        }
        
        if( listar ) {
            console.log("=============================".green);
            console.log("          TABLA DEL:".green, colors.blue(base));
            console.log("=============================".green);
            console.log(clg);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;

    } catch(err) {  
        throw err;
    }


    // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //     if(err) throw err;

    //     console.log(`tabla-${base}.txt creado`);
    // });
}


module.exports = {
    crearArchivo
}
