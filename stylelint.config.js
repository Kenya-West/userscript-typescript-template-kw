module.exports = {
    extends: ["stylelint-config-standard", "stylelint-config-idiomatic-order"],
    plugins: ["stylelint-order"],
    rules: {
        "at-rule-empty-line-before": null,
        "at-rule-no-unknown": null,
        "declaration-no-important": null,
        "font-family-no-missing-generic-family-keyword": null,
        indentation: 4,
        "no-descending-specificity": null,
        "no-empty-source": null,
        "no-invalid-position-at-import-rule": null,
        "selector-type-no-unknown": [
            true,
            {
                ignore: ["custom-elements", "default-namespace"]
            }
        ]
    }
};
