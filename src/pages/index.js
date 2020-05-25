import React from "react"
import { Link, graphql } from 'gatsby';
import { FaInstagram, FaFacebook } from 'react-icons/fa';


import SEO from "../components/seo"

import logo from "../images/logo.jpeg"
import negocios from "../images/negocios.svg"
import saude from "../images/logo.jpeg"
import entretenimento from "../images/logo.jpeg"

import { Header, Container, Categories, Footer } from './styles';

const Home = ({ data }) => {
  const { edges } = data.allMarkdownRemark

    return (
      <>
        <SEO title="Home" />

        <Header>
          <img
            src={logo}
            alt="unicom-logo"
          />

          <p>UNICOM - Unindo a universidade com a comunidade</p>

          <div>
            <Link to="/">
              <FaInstagram size={30} />
            </Link>
            <Link to="/">
              <FaFacebook size={30} />
            </Link>
          </div>
        </Header>

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

      <Footer>Contatos: </Footer>
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
          image
        }
      }
    }
  }
}
`

export default Home;
