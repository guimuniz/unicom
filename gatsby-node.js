const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
      `
        {
          allMarkdownRemark {
            edges {
              node {
                html
                frontmatter {
                  title
                  path
                }
              }
            }
          }
        }
      `
    )

      if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
      }

      const category = path.resolve('src/templates/category.tsx')

      const categories = result.data.allMarkdownRemark.edges;

      categories.forEach(({node}) => {
        const path = node.frontmatter.path

        createPage({
          path,
          component: category,
        })
      })

}
