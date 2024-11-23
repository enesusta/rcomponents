import react from "@vitejs/plugin-react";
import path from "node:path";
import { name } from "./package.json";

import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react({ include: /\.(js|jsx|ts|tsx)$/ }),
      dts({
        insertTypesEntry: true,
        include: ["lib/form"],
      }),
    ],
    build: {
      outDir: "form",
      copyPublicDir: false,
      minify: "terser",
      lib: {
        entry: path.resolve(__dirname, "lib/form/index.ts"),
        name: formattedName,
        formats: ["es"],
        fileName: (format) => `index.js`,
      },
      rollupOptions: {
        external: ["react", "React", "react/jsx-runtime", "react-dom"],
      },
    },
  };
});
