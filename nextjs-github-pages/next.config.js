// @ts-check
// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/JuanFrancisco21.github.io/' : '',
  images: {
    unoptimized: true,
  },
}