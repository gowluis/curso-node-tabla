const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, lista = false, hasta = 10) => {

    try {
        console.log('=============='.green);
        console.log(`Tabla del ${base}`.white);
        console.log('=============='.green);

        let salida = '';

        for (let i = 1; i <= `${hasta}`; i++) {

            salida += `${base}x${i} = ${base*i}\n`;
        }
        if (lista) {
            console.log(salida);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}