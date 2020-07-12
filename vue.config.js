const TerserJSPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    productionSourceMap: false,
    transpileDependencies: [

    ],
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugin('compressionPlugin')
                .use(new CompressionPlugin({
                    test:/\.js$|\.html$|\.css/,
                    threshold: 10240,
                    deleteOriginalAssets: false
                }))
        }
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV == 'production') {
            config.mode = 'production'
            let optimization = {
                minimizer: [new TerserJSPlugin({
                    terserOptions: {
                        ecma: undefined,
                        warnings: false,
                        parse: {},
                        compress: {
                            drop_console: true,
                            drop_debugger: false,
                            pure_funcs: ['console.log']
                        }
                    },
                    cache: true,
                    sourceMap: true
                })],
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            chunks: 'all',
                            test: /node_modules/,
                            name: 'vendor',
                            minChunks: 1,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 100
                        }
                    }
                }
            }
            Object.assign(config, {
                optimization
            });
        } else {
            // dev
            config.mode = 'development';
        }
    }
}