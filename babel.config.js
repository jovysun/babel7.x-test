module.exports = function (api) {
  api.cache(true);

  const presets = [
    // 根、frontend、backend 的公共预设
    [
      "@babel/preset-env",
      {
        // "modules": "umd",
        "targets": {
          "browsers": [
            "last 2 versions",
            "ie >= 11"
          ]

        },
        "useBuiltIns": "entry"
      }
    ]
  ]
  const plugins = [

  ]

  return {
    presets,
    plugins,
    babelrcRoots: ['.', './packages/mod2']
  }
}
