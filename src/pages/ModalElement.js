import React from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom';

function ModalElement() {
    return (
      <>
        <ul>
          <Link to="/" >브랜드</Link>
          <h1>바이크</h1>
          <h1>의류</h1>
          <h1>매거진</h1>
        </ul>
      </>
    );
}

export default ModalElement

// 모달창 버튼 css
export const Button =styled.button`
    background: none;
    border: none;
    color:white;
    font-size:26px;
    margin-top: 5px;
    margin-left:25px;
    cursor: pointer;

    &:hover{
        color: #afff62;
    }
`
// 모달창 내부 css
export const ModalCustom = {
  content : {
      top: '50%',
      left:'50%',
      right: 'auto',
      bottom: 'auto',
      width:'70%',
      height:'80%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#fff',

    }
}

export const ModalButton = styled.button`
  background: none;
  border: none;
  float: right;
  color: #000;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`
