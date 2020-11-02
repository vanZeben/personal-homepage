const debug = process.env.NODE_ENV !== "production";

module.exports = {
  distDir: 'build',
  assetPrefix: !debug ? '/personal-homepage/' : '',
  basePath: !debug ? '/personal-homepage' : '',
}