module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-env"];
  const plugins = [
    "@babel/plugin-transform-class-properties",
    "@babel/plugin-transform-nullish-coalescing-operator",
    "@babel/plugin-transform-optional-chaining"
  ];

  return {
    presets,
    plugins
  };
};
