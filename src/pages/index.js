import React from "react"
import { Link, graphql } from 'gatsby';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import newLayout from "../components/new-layout"

import { Categories } from './styles';

const Home = ({ data }) => {
  const { edges } = data.allMarkdownRemark

    return (
      <newLayout>
        <SEO title="Home" />

        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>

        <Categories>
          {edges.map(item => {
            const { node: {frontmatter: { path, title }} } = item

            return (
              <Link to={path} key={path}>
                <h1>{title}</h1>
              </Link>
            )
          })}
        </Categories>
      </newLayout>
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
