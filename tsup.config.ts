import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["server/main.ts"],
  outDir: "server/dist",
  format: ["esm"],
  target: "node16",
  clean: true,
  sourcemap: true,
  minify: true,
  bundle: true,
  splitting: true,
  treeshake: true,
});
