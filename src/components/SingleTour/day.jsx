import React , {useState} from 'react'
import styled from "styled-components"
import {FaArrowDown, FaArrowUp} from "react-icons/fa"
const Day = ({info, day}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <div className="toggleInfo"onClick={() => setIsOpen(prevState => !prevState)}>
        <h3>{day}</h3>
        {isOpen ? <FaArrowUp className="icon" /> :
         <FaArrowDown className="icon" />}
      </div>
      <div className={isOpen ? `show content` : `content` } >
        {info}
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom : 2rem;
  transition : var(--mainTransition);
  .toggleInfo{
    display : flex ; 
    flex-wrap : wrap;
    cursor : pointer;        
  }
  .icon{    
    margin-left : 2rem;
    font-size : 1.4em;
    color : var(--primaryColor);    
  }
  .content{           
    max-height : 0;
    opacity : 0;
    visibility : hidden;
    transition : all 0.5s;  
  }
  .show{    
    max-height: 100vh;  
    opacity : 1 ;
    visibility : visible;
    transition : all 0.5s;
  }
`

export default Day
