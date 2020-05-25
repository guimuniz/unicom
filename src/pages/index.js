import React from "react"
import { Link, graphql } from 'gatsby';
import { FaInstagram, FaFacebook } from 'react-icons/fa';


import SEO from "../components/seo"

import logo from "../images/logo.jpeg"
import negocios from "../images/negocios.svg"
import saude from "../images/logo.jpeg"
import entretenimento from "../images/logo.jpeg"

import { Page, Header, Container, Categories, Footer } from './styles';

const Home = ({ data }) => {
  const { edges } = data.allMarkdownRemark

    return (
      <Page>
        <SEO title="Home" />

        <Header>
          <img
            src={logo}
            alt="unicom-logo"
          />

          <p>UNICOM - Unindo a universidade com a comunidade</p>

          <div>
            <FaInstagram size={30} />
            <FaFacebook size={30} />
          </div>
        </Header>

        <body>
          <Container>
            {edges.map(item => {
              const { node: {frontmatter: { path, title, image }} } = item

              return (
                <Categories>
                  <Link to={path} key={path}>
                    <h1>{title}</h1>

                    <img
                      src={negocios}
                      alt={`${image}-logo`}
                    />

                  </Link>
                </Categories>
              )
            })}
          </Container>
        </body>

        {/* <Footer>Contatos: </Footer> */}
      </Page>
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
          image
        }
      }
    }
  }
}
`

export default Home;
