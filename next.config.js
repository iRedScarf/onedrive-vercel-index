const { i18n } = require('./next-i18next.config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})

module.exports = withBundleAnalyzer({
  env: {
    USER_PRINCIPAL_NAME: process.env.USER_PRINCIPAL_NAME,
    SITE_TITLE: process.env.SITE_TITLE,
    BASE_DIRECTORY: process.env.BASE_DIRECTORY,
    EMAIL: process.env.EMAIL
  },
  i18n,
  reactStrictMode: true,
  // Required by Next i18n with API routes, otherwise API routes 404 when fetching without trailing slash
  trailingSlash: true,
})
