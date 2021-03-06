module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 2017
    },
    rules: { /* eslint-disable quote-props */
        "array-bracket-newline": "error",
        "arrow-body-style": "error",
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "block-spacing": "error",
        "brace-style": "error",
        "comma-dangle": "error",
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "generator-star-spacing": "error",
        "implicit-arrow-linebreak": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "linebreak-style": "error",
        "lines-around-comment": "error",
        "lines-between-class-members": "error",
        "new-parens": "error",
        "no-console": "off",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-floating-decimal": "error",
        "no-lonely-if": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-unneeded-ternary": "error",
        "no-unused-labels": "error",
        "no-useless-computed-key": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "object-curly-spacing": ["error", "always"],
        "object-shorthand": "error",
        "one-var": ["error", "never"],
        "one-var-declaration-per-line": "error",
        "operator-assignment": "error",
        "operator-linebreak": ["error", "before"],
        "padded-blocks": ["error", "never"],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-numeric-literals": "error",
        "prefer-spread": "error",
        "quote-props": ["error", "as-needed"],
        "quotes": "error",
        "rest-spread-spacing": "error",
        "semi": "error",
        "semi-spacing": "error",
        "semi-style": "error",
        "sort-imports": "error",
        "sort-vars": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "switch-colon-spacing": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": "error",
        "wrap-iife": "error",
        "yield-star-spacing": "error",
        "yoda": "error"
    }
};
