module.exports = {
    // We're using different node.js modules in our code,
    // this prevents WebPack from failing on them or embedding
    // polyfills for them into the bundle.
    //
    // Error: Module not found: Error: Can't resolve 'fs'
    node: {
        __dirname: false,
        fs: 'empty',
        Buffer: false,
        process: false
    },
    module: {
        // Makes WebPack think that we don't need to parse this module,
        // otherwise it tries to recompile it, but fails
        //
        // Error: Module not found: Error: Can't resolve 'env'
        noParse: /\.wasm$/,
        rules: [
            {
                test: /\.wasm$/,
                // Tells WebPack that this module should be included as
                // base64-encoded binary file and not as code
                loaders: ['base64-loader'],
                // Disables WebPack's opinion where WebAssembly should be,
                // makes it think that it's not WebAssembly
                //
                // Error: WebAssembly module is included in initial chunk.
                type: 'javascript/auto'
            }
        ]
    }
};
