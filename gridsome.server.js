// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const socialProfiles = require("./src/data/social.json")
const homeModules = require("./src/data/home-modules.json")
module.exports = function (api) {
  api.loadSource(store => {
    const contentType = store.addContentType({
      typeName: "Social"
    })

    for (const item of socialProfiles) {
      contentType.addNode({
        network: item.network,
        icon: item.icon,
        url: item.url
      })
    }
  })

  api.loadSource(store => {
    const contentType = store.addContentType({
      typeName: "HomeModule"
    })

    for (const item of homeModules) {
      contentType.addNode({
        id: item.name,
        title: item.title,
        subtitle: item.subtitle,
        description: item.description,
        buttons: item.buttons,
        image: item.image,
        logos: item.logos
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}
