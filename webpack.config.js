const path = require('path')

module.exports = {
    entry: `./js/app.js`,
    output: {
        path: path.resolve(__dirname, `dist`),
        filename: 'bundle.js',
    },
    watch: true,
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, `.`),
        publicPath: '/dist/',
        compress: true,
        port: 8000,
        hot: true,
        inline: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader?sourceMap',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
        ],
    },
}
