var path = require('path');

module.exports = {
    // entry point: __dirname:current directory look in src folder
    entry: path.resolve(__dirname, 'src') + '/app/index.js', 

   //output point:
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    //configure babel:
    module: {
        loaders: [
            {
                //compile/test js files and covert to javascript
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                //compile css
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};