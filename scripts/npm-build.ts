import { build } from "../deps.ts";

await build({
  entryPoints: ["./mod.ts"],
  outDir: "npm",
  shims: {
    deno: false,
  },
  package: {
    name: "@windchime-yk/learn-deno-dnt",
    version: Deno.args[0],
  },
});
