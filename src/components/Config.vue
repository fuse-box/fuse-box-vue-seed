<template>
  <section class="container">
    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header" class="title">Basic</div>
        <v-card>
          <v-card-text>
            <p>
              By default the <a href="http://fuse-box.org/plugins/vuecomponentplugin" target="_blank">Vue Component Plugin</a>
               will internally use the
              <a href="http://fuse-box.org/plugins/html-plugin" target="_blank">HTML Plugin</a>,
              <a href="http://fuse-box.org/plugins/css-plugin" target="_blank">CSSPlugin</a> and
              FuseBox's internal <a href="http://fuse-box.org/page/typescript#typescript" target="_blank">TypeScript compiler</a>.
              This is all you need to get up and running for a basic Vue project:
            </p>
            <pre>
              <code class="language-javascript">
                const { FuseBox, VueComponentPlugin } = require("fuse-box");

                FuseBox.init({
                  plugins: VueComponentPlugin()
                });
              </code>
            </pre>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header" class="title">Language/Src Attributes</div>
        <v-card>
          <v-card-text>
            <p>
             Single File Components are an awesome feature of Vue and FuseBox supports them out of the box.
             If you use the basic configuration above then any lang attributes will overide the default plugins on a per file
             basis:
            </p>
            <pre>
              <code class="language-html">
                &lt;template lang="pug"&gt;
                  &lt;!-- This block will be processed using the Consolidate Plugin --&gt;
                &lt;/template&gt;
                &lt;script lang="coffee"&gt;
                  // This block will be processed using the Coffee Script Plugin
                &lt;/script&gt;
                &lt;style lang="scss" scoped&gt;
                  // This block will be processed using the Sass Plugin (and it will also be scoped to this component!)
                &lt;/style&gt;
              </code>
            </pre>
            <p>
              In addtion, FuseBox also understands the src attribute so you can extract one (or more) blocks out of the
              .vue file:
            </p>
            <pre>
              <code class="language-html">
                &lt;template src="./my-template.pug"&gt;&lt;/template&gt;
                &lt;script src="./my-script.coffee"&gt;&lt;/script&gt;
                &lt;style src="./my-style.scss" scoped&gt;&lt;/style&gt;
              </code>
            </pre>
            <p>
              If the extension is inluded in the src path then Fusebox will inferer the language type automatically. For
              more info on the vue file spec, see <a href="https://vue-loader.vuejs.org/en/start/spec.html" target="_blank">here</a>.
            </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header" class="title">Custom Plugin Chain</div>
        <v-card>
          <v-card-text>
            <p>
             If the configuration options above do not fit your requirements, don't panic! FuseBox allows you to take complete control
             over the <a href="http://fuse-box.org/page/configuration#plugins" target="_blank">plugin chain</a> used to
             process each block. This follows FuseBox's normal plugin chain approach:
            </p>
            <pre>
              <code class="language-javascript">
                const {
                  FuseBox,
                  VueComponentPlugin,
                  ConsolidatePlugin,
                  LESSPlugin,
                  CSSResourcePlugin,
                  CSSPlugin,
                  CoffeScriptPlugin
                } = require("fuse-box");

                FuseBox.init({
                  plugins: VueComponentPlugin({
                    template: ConsolidatePlugin({ ... }),
                    script: CoffeeScriptPlugin({ ... }),
                    style: [
                      LESSPlugin({ ... }),
                      CSSResourcePlugin({ ... }),
                      CSSPlugin({ ... })
                    ]
                  })
                });
              </code>
            </pre>
            <p>
              For a full list of available plugins, see <a href="http://fuse-box.org/plugins" target="_blank">here</a>.
            </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <div slot="header" class="title">Hot Module Replacement</div>
        <v-card>
          <v-card-text>
            <p>
             This is as simple as adding HMR to your fuse config:
            </p>
            <pre>
              <code class="language-javascript">
                const { FuseBox, VueComponentPlugin } = require("fuse-box");

                const fuse = FuseBox.init({
                  plugins: VueComponentPlugin()
                });

                fuse.bundle("app.js")
                    .instructions("> index.ts")
                    .hmr();
              </code>
            </pre>
            <p>
              For more information, see <a href="http://fuse-box.org/page/development#hot-module-reload">here</a>.
            </p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </section>
</template>
<script>
  export default {
  }
</script>
<style lang="scss" scoped>
  .container {
    width: 75%;
    margin: 0 auto;
  }
</style>
