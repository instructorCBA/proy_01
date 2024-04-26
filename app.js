require('colors');

const math = require('./modules/math.js')

const main = async() => {
    console.clear();
    console.log('****************************'.green);
    console.log('*   '.green + 'Funciones Matematicas'.yellow + ' *'.green)
    console.log('****************************'.green);

    console.log(math.add(5,3));
    console.log(math.add1(5,3));
    console.log(math.substract(2,8));
    console.log(math.multiply(2,8));
    console.log(math.divide(2,0.9));
}

main();
