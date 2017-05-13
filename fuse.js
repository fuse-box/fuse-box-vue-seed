const {FuseBox, VuePlugin, HTMLPlugin, SassPlugin, CSSPlugin, WebIndexPlugin, Sparky} = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "./src",
    output: "dist/$name.js",
    plugins: [
        VuePlugin(),
        [
            SassPlugin({importer: true}),
            CSSPlugin({group: "app.css", outFile: "./dist/app.css"})
        ],
        HTMLPlugin({useDefault: false}),
        WebIndexPlugin({template: "./src/index.html"})
    ]
});

fuse.dev();

fuse.bundle("app.js")
    .instructions("> index.ts + components/**")
    .watch();

fuse.run();

Sparky.task("default", () => {
        return Sparky.watch("./assets", {base: "./src"})
            .dest("./dist");
    }
);
