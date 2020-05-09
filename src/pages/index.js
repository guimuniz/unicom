import React from "react"
import { Link, graphql } from 'gatsby';

const Home = ({ data }) => {
  const { edges } = data.allMarkdownRemark

    return (
      <>
        <h1>Homepage</h1>

        <div>
          {edges.map(item => {
            const { node: {frontmatter: { path, title }} } = item

            return (
              <Link to={path} key={path}>
                <h1>{title}</h1>
              </Link>
            )
          })}
        </div>

      </>
    )
  };

export const pageQuery = graphql`
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

export default Home;
