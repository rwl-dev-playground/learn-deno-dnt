import { build, ensureDir } from "../deps.ts";

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

await ensureDir("./npm/assets/");
await Deno.copyFile(
  "./_novel-support.scss",
  "./npm/assets/_novel-support.scss",
);
