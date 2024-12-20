import react from "@vitejs/plugin-react";
import path from "node:path";
import { name } from "./package.json";

import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

const formattedName = name.match(/[^/]+$/)?.[0] ?? name;

const aliases = [
  {
    find: /@mantine\/core/,
    replacement: path.resolve(__dirname, "node_modules", "@mantine", "core"),
  },
];

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react({ include: /\.(js|jsx|ts|tsx)$/ }),
      dts({
        insertTypesEntry: true,
        include: ["lib"],
      }),
    ],
    resolve: { alias: aliases },
    build: {
      copyPublicDir: false,
      target: "es2022",
      lib: {
        entry: path.resolve(__dirname, "lib/index.ts"),
        name: formattedName,
        formats: ["es"],
        // fileName: (format) => `${formattedName}.${format}.js`,
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: [
          "react",
          "react/jsx-runtime",
          "react-dom",
          "@mantine/core",
          // "@mantine/dates",
        ],
        output: {
          globals: {
            react: "React",
            "react/jsx-runtime": "react/jsx-runtime",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
  };
});
