import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
});

const eslintConfig = [
  ...compat.extends(
    "eslint:recommended",
    "prettier",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ),
  {
    ignores: ["components/ui/**"],
    rules: {
      "arrow-body-style": ["warn", "as-needed"],
      eqeqeq: ["warn", "always"],
      "linebreak-style": ["warn", "unix"],
      "eol-last": ["warn", "always"],
      "no-restricted-imports": [
        "warn",
        {
          patterns: ["../../../*", "!../*", "!../../*", "!test/**/*"],
        },
      ],
      "react/self-closing-comp": [
        "warn",
        {
          component: true,
          html: true,
        },
      ],
      "react/react-in-jsx-scope": "off",
      "no-const-assign": "warn",
      "no-lone-blocks": "warn",
      "no-return-await": "warn",
      "no-trailing-spaces": "warn",
      "no-throw-literal": "warn",
      "no-unused-expressions": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-useless-catch": "warn",
      "no-useless-escape": "warn",
      "no-useless-return": "warn",
      "no-undef-init": "warn",
      "no-unneeded-ternary": "warn",
      "no-unreachable": "warn",
      "no-var": "warn",
      "prefer-const": "warn",
      quotes: ["off", "double"],
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "require-await": "warn",
      semi: ["warn", "always"],
      "spaced-comment": ["warn", "always", { exceptions: ["-", "+"] }],
    },
  },
];

export default eslintConfig;
