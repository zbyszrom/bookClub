import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Book from "../components/book"

export const query = graphql`
  query BookQuery($bookId: String!) {
    b: book(id: { eq: $bookId }) {
      summary
      title
      id
      author {
        name
      }
    }
  }
`

const BookTemplate = ({ data }) => {
  const { summary, title, author } = data.b
  return (
    <Layout>
      <Book authorName={author.name} bookSummary={summary} bookTitle={title} />
    </Layout>
  )
}

export default BookTemplate
