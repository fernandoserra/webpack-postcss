const patch = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: patch.resolve(__dirname, 'src/js/index.js'), //con  un solo entry point   
    output: {
        path: patch.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //['style-loader','css-loader']
                    //fallback:'style-loader' //  no es necesario
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                }),
            }
        ]
    },
    plugins: [
        //aqui van los plugins
        new ExtractTextPlugin("css/styles.css")
    ]

}
