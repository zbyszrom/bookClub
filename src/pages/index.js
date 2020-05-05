import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Book from "../components/book"
//import styled from "styled-components"

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
          <Link to={`/book/${node.id}`}>Join conversation</Link>
        </Book>
      ))}
    </Layout>
  )
}

export default IndexPage
