import { defineConfig } from "tsup";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  entry: [
    "package/index.tsx",
    "package/colorThemes.ts",
    "package/tailwind.config.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  skipNodeModulesBundle: true,
  external: ["react", "react-dom"],
  outDir: "dist",
  esbuildPlugins: [
    {
      name: "postcss",
      setup(build) {
        build.onLoad({ filter: /\.css$/ }, async (args) => {
          const fs = require("fs").promises;
          const source = await fs.readFile(args.path, "utf8");
          const result = await postcss([
            tailwindcss(require.resolve("./postcss.config.cjs")),
            autoprefixer(),
          ]).process(source, {
            from: args.path,
            to: args.path,
          });
          return {
            contents: result.css,
            loader: "css",
          };
        });
      },
    },
  ],
});
