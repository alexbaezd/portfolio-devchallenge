module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async config => {
    const babelPlugins = [
      [
        require.resolve("babel-plugin-remove-graphql-queries"),
        {
          stage: config.mode === `development` ? "develop-html" : "build-html",
          staticQueryDir: "page-data/sq/d",
        },
      ],
    ]

    // transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins = babelPlugins
    return config
  },
}
