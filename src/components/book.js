import React from "react"
import Img from "gatsby-image"

const Book = ({ authorName, bookTitle, bookSummary, bookCover, children }) => {
  return (
    <>
      <Img fixed={bookCover} />
      <h2>
        {bookTitle}
        <small> -- {authorName}</small>
      </h2>

      <p>{bookSummary}</p>
      <div>{children}</div>
    </>
  )
}
export default Book
