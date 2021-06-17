import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

// nav바
export const Nav = styled.nav`
    background: #000;
    height: 60px;
    display: fixed;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: .5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`
//nav바 홈
export const NavLink = styled(Link)`
    color: #fff;
    align-items: center;
    text-align: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        color: #f6bb6f;
    }
` 
// 모바일 시 bar
export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 3px;
        right: 0px;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
// 오른쪽 btn
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
// 오른쪽 btn Link
export const NavBtnLink = styled(Link)`
    display: flex;
    font-size: 30px;
    margin-left: 35px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    &:nth-child(1):hover{
        color: #ff7457;
    }
    &:nth-child(2):hover{
        color: #ffaf2e;
    }
    &:nth-child(3):hover{
        color: #fff970;
    }
`

export const ModalFunction = styled.button`
display: flex;
font-size: 30px;
margin-left: 35px;
cursor: pointer;
text-decoration: none;
color: #fff;
`

