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
      }),
    ],
    server: {
      open: true, // If we want to open the app once its started
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
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
          "@mantine/dates",
          "@mantine/dropzone",
          "@mantine/form",
          "@mantine/hooks",
          "@mantine/modals",
          "@mantine/nprogress",
          "mantine-datatable",
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
