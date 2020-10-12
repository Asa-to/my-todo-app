// 複数指定する際は配列[]で指定する
module.exports = {
    // watch mode
    watch: false,
    watchOptions: {
        ignored: /node_modules/,
    },
    // mode設定
    // mode: 'development',
    mode: 'production',
    // エントリーポイント
    entry: [
        './src/index.js',
        './src/style.css',
    ],
    //出力先
    output: {
        path: __dirname + '/public/javascripts/',
        filename: 'main.js'
    },
    // loader設定
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // 後ろのpresetから実行される
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ]
                        }
                    }
                ]
            }
        ]
    }
}
