/**
 * @type {import('prettier'.Config & import('@trivago/prettier-plugin-sort-imports').PluginConfig & import('prettier-plugin-tailwindcss').PluginOptions)}
 */
const config = {
  printWidth: 120,
  tabWidth: 2,
  bracketSpacing: true,
  bracketSameLine: false,
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "always",
  semi: true,
  quoteProps: "consistent",
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^../(.*)", "^./(.*)"],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
