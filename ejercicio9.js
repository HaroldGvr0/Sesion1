const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('ingrese una palabra: ', (palabra) =>{
    const vocales = palabra.match(/[aeiou]/gi);
    const numeroVocales = vocales ? vocales.length:0;
    console.log(`Numero de vocales: ${numeroVocales}`);
    rl.close();
})