import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Book from "../components/book"

const getBooks = graphql`
  query {
    allBooks: allBook {
      edges {
        node {
          id
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
const IndexPage = ({ children }) => {
  const response = useStaticQuery(getBooks)
  const books = response.allBooks.edges

  return (
    <Layout>
      {books.map(book => (
        <Book
          key={book.node.id}
          bookTitle={book.node.title}
          authorName={book.node.author.name}
          bookSummary={book.node.summary}
        ></Book>
      ))}
    </Layout>
  )
}

export default IndexPage
