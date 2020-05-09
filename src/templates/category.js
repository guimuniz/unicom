import React from 'react';
import { graphql, Link } from 'gatsby';

const Category = ({data}) => {
  const { html, frontmatter: { title } } = data.markdownRemark;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />

      <Link to="/">Go to home</Link>
    </>
  )
};

export const pageQuery = graphql`
  query Postpage($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`

export default Category;





