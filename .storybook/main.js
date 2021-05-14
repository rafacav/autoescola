module.exports = {
  stories: [
    "../src/stories/*.stories.(js|mdx)",
    "../src/components/*.stories.mdx",
    "../src/components/*.stories.@(js|jsx|ts|tsx)",
    "../src/styles/*.stories.(js|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
  ],
};
