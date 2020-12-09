import React from "react"
import ReactPaginate from "react-paginate"
import styled from "styled-components"
const BlogPaginate = ({ numPages, currentPage, handlePageClick }) => {
  return (
    <Wrapper>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        initialPage={currentPage-1}
        pageCount={numPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width:  80vw;
  margin : 3rem auto;
  .pagination {
    display: flex;
    justify-content: center;
  }
  li{
    list-style : none ;
    margin: 0 0.1rem;
  }
  a{
    display : block ;
    outline : none ;
    padding : 0.5rem 0.75rem;
    border : 1px solid var(--primaryColor);
    cursor : pointer;
    transition : var(--mainTransition);
    box-shadow: 2px 2px 4px rgba(0,0,0,0.15);
    &:hover{      
      background-color : var(--primaryColor);
      color : var(--mainWhite);     
    }
  }
  .active{
    background-color : var(--primaryColor);
    color : var(--mainWhite);    
  }
`

export default BlogPaginate
