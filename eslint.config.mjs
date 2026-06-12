import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // The theme relies on plain <img> with absolute/object-fit CSS; next/image
      // would change the markup and break the design.
      "@next/next/no-img-element": "off",
      // French content contains apostrophes/quotes rendered from data strings.
      "react/no-unescaped-entities": "off",
    },
  },
  // Legacy data modules reused verbatim from the old app.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "lib/legacy/**",
  ]),
]);

export default eslintConfig;
