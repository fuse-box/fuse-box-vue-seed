const {FuseBox, VueComponentPlugin, HTMLPlugin, SassPlugin, CSSPlugin, CSSResourcePlugin, WebIndexPlugin, Sparky} = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "./src",
    output: "dist/$name.js",
    useTypescriptCompiler: true,
    polyfillNonStandardDefaultUsage : true,
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
      })
    ]
});

fuse.dev({
  open: true,
  port: 8080
});

fuse.bundle("app.js")
    .instructions("> index.ts")
    .watch()
    .hmr();

fuse.run();

Sparky.task("default", () => Sparky.watch("./assets", {base: "./src"}).dest("./dist"));
