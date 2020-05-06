import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Book from "../components/book"
import styled from "styled-components"

const getBooks = graphql`
  query {
    allBooks: allBook {
      edges {
        node {
          id
          localImage {
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          summary
          title
          author {
            name
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const response = useStaticQuery(getBooks)
  const books = response.allBooks.edges

  const Button = styled.div`
    text-align: right;
    a {
      padding: 8px;
      background: rebeccapurple;
      color: white;
      border-radius: 8px;
      text-decoration: none;

      &:hover {
        background: indigo;
      }
    }
  `

  return (
    <Layout>
      {books.map(({ node }) => (
        <Book
          key={node.id}
          bookCover={node.localImage.childImageSharp.fixed}
          bookTitle={node.title}
          authorName={node.author.name}
          bookSummary={node.summary}
        >
          <Button>
            <Link to={`/book/${node.id}`}>Join conversation</Link>
          </Button>
        </Book>
      ))}
    </Layout>
  )
}

export default IndexPage
