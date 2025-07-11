import baseConfig from "@enact/eslint-config/base";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  {
    files: ["src/**/*.ts"],
    ignores: ["node_modules/**"],
  },
];
