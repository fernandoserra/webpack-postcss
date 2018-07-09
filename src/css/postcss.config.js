//este archivo de configuracion en necesario para que funcione postcss
/*module.exports={
    plugins:{
        'postcss-cssnext':{} //aqui le estamos agregando un plugin a postcss
    }
}*/

module.exports = {
    plugins: [
        require('postcss-cssnext'),
        require('postcss-simple-vars')
    ]
}