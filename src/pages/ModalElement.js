import React from 'react'
import styled from "styled-components";

function ModalElement() {
    return (
      <>
        <ul>       
          {/* 모바일 */}

          {/* 데스크탑 */}
            
          <div>
            <div className="menu">Products</div>
            <div className="submenu">전체</div>
            <div className="submenu">의류</div>
            <div className="submenu">가방</div>
            <div className="submenu">악세사리</div>
            <div className="submenu">잡화</div>
          </div>
          <div>
            <div className="menu">Brands</div>
            <div className="submenu">두카티</div>
            <div className="submenu">할리데이비슨</div>
            <div className="submenu">혼다</div>
            <div className="submenu">야마하</div>
            <div className="submenu">트라이엄프</div>
          </div>
          <div>
            <div className="menu">Magazine</div>
            <div className="subMenu">브랜드 소개</div>
            <div className="subMenu">캠패인</div>
          </div>


          <a href="/">전체</a><br />             
          <h1>Brands</h1>
          <h1>Magazine</h1>
          <a href="/">브랜드</a><br />
          <a href="/">바이크</a><br />
          <a href="/">의류</a><br />
          <a href="/">매거진</a><br />
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
      width:'50%',
      height:'70%',
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
