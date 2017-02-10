const fsbx = require('fuse-box');

const fuseBox = fsbx.FuseBox.init({
    homeDir: 'src/',
    sourceMap: {
        bundleReference: 'app.js.map',
        outFile: './dist/app.js.map'
    },
    outFile: './dist/app.js',
    plugins: [
        [
            fsbx.SassPlugin({ outputStyle: 'compressed' }),
            fsbx.CSSPlugin({})
        ],
        fsbx.TypeScriptHelpers(),
        fsbx.JSONPlugin(),
        fsbx.HTMLPlugin({ useDefault: false })
    ]
});

fuseBox.devServer('>main.ts **/*.html', {
    port: 4445
});