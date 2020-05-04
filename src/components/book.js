import React from "react"

const Book = ({ authorName, bookTitle, bookSummary, children }) => {
  return (
    <>
      <h2>
        {bookTitle}
        <small> -- {authorName}</small>
      </h2>

      <p>{bookSummary}</p>
    </>
  )
}
export default Book
