// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: process.env.SITE_NAME,
  siteDescription: process.env.SITE_DESCRIPTION,
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GA_UA
      }
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        baseId: process.env.AIRTABLE_BASE_ID,
        tableName: 'Gigs',
        typeName: 'Gig'
      }
    }
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  css: {
    loaderOptions: {
      scss: {
        sourceComments: false
      }
    }
  }
}
