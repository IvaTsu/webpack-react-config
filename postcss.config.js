/**
 * localIdentName опция позволяет задавать имена CSS классам,
 * для продукционной версии будем использовать хэш из 10 символов,
 * для девелоп — названия классов + хэш из 5 символов.
 */

module.exports = {
  plugins: [
    require("precss"),
    require("autoprefixer"),
    require("postcss-easy-import"),
    require("postcss-simple-vars"),
    require("postcss-css-variables"),
    require("postcss-mixins"),
    require("postcss-nested"),
    require("postcss-color-function")
  ]
};
