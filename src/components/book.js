import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const ImgWrap = styled.div`
  max-width: 200px;
`
const Content = styled.div`
  flex-grow: 1;
  padding-left: 8px;
`

const Book = ({ authorName, bookTitle, bookSummary, bookCover, children }) => {
  return (
    <section>
      <ImgWrap>
        <Img fixed={bookCover} />
      </ImgWrap>
      <Content>
        <h2>
          {bookTitle}
          <small> {authorName}</small>
        </h2>

        <p>{bookSummary}</p>
        <div>{children}</div>
      </Content>
    </section>
  )
}
export default Book
