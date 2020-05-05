const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const bookTemplate = path.resolve("src/templates/bookTemplate.js")

  const { data } = await graphql(`
    query {
      books: allBook {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  data.books.edges.forEach(({ node }) => {
    createPage({
      path: `/book/${node.id}`,
      component: bookTemplate,
      context: { bookId: node.id },
    })
  })
}
