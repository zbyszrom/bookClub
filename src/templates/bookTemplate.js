import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Book from "../components/book"

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: { eq: $bookId }) {
      summary
      title
      id
      author {
        name
      }
    }
  }
`

const BookTemplate = props => {
  console.log(props.data)
  const { summary, title, author } = props.data.book

  return (
    <Layout>
      <Book bookTitle={title} authorName={author.name} bookSummary={summary} />
    </Layout>
  )
}

export default BookTemplate
