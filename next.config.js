module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /.*\.ico$/,
      loader: "url-loader",
    });
    return config;
  },
};
