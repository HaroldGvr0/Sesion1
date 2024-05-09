const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('ingrese una frase: ' ,(frase) => {
    rl.question('ingrese la palabra  que se va a reemplazar: ' ,(palabraCambiar) =>{
        rl.question('ingrese la palabra nueva ', (nuevaPalabra) => {
            const fraseModificada = frase.replace(new RegExp(palabraCambiar, 'gi'), nuevaPalabra)
            console.log('Frase modificada: ', fraseModificada)
            rl.close();
        })
    })
})