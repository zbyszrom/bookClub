import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Book from "../components/book"

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: { eq: $bookId }) {
      localImage {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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
  console.log(data)
  const { localImage, summary, title, author } = data.book

  return (
    <Layout>
      Book
      <Book
        bookCover={localImage.childImageSharp.fixed}
        bookTitle={title}
        authorName={author.name}
        bookSummary={summary}
      />
    </Layout>
  )
}

export default BookTemplate
