const {
    FuseBox,
    VueComponentPlugin,
    QuantumPlugin,
    HTMLPlugin,
    SassPlugin,
    CSSPlugin,
    CSSResourcePlugin,
    WebIndexPlugin,
    Sparky
} = require("fuse-box");

let fuse;
let isProduction = false;

Sparky.task("set-prod", () => {
    isProduction = true;
});
Sparky.task("clean", () => Sparky.src("./dist").clean("dist/"));
Sparky.task("watch-assets", () => Sparky.watch("./assets", { base: "./src" }).dest("./dist"));
Sparky.task("copy-assets", () => Sparky.src("./assets", { base: "./src" }).dest("./dist"));

Sparky.task("config", () => {
    fuse = FuseBox.init({
        homeDir: "./src",
        output: "dist/$name.js",
        //hash: isProduction,
        sourceMaps: !isProduction,
        useTypescriptCompiler: true,
        polyfillNonStandardDefaultUsage: true,
        plugins: [
            VueComponentPlugin({
                style: [
                    SassPlugin({
                        importer: true
                    }),
                    CSSResourcePlugin(),
                    CSSPlugin({
                        group: 'components.css',
                        inject: 'components.css'
                    })
                ]
            }),
            CSSPlugin(),
            WebIndexPlugin({
                template: "./src/index.html"
            }),
            isProduction && QuantumPlugin({
                bakeApiIntoBundle: "vendor",
                uglify: true,
                treeshake: true
            }),
        ]
    });

    if(!isProduction){
        fuse.dev({
            open: true,
            port: 8080
        });
    }
    
    const vendor = fuse.bundle("vendor")
        .instructions("~ index.js");

    const app = fuse.bundle("app")
        .instructions("> [index.js]");

    if(!isProduction){
        app.watch().hmr();
    }
})

Sparky.task("default", ["clean", "watch-assets", "config"], () => {
    return fuse.run();
});

Sparky.task("dist", [ "clean", "copy-assets", "set-prod", "config"], () => {
    return fuse.run();
});