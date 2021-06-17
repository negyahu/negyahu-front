import styled, { css } from 'styled-components';

export const HelpToggle = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 40px;
    bottom: 40px;
    font-size: 70px;
    color: #ced4da;
    cursor: pointer;
    z-index: 3;

    transition: all 0.3s linear;
    &:hover {
        color: #ff8787;
        font-size: 80px;
    }
    &:active {
        color: #ff6b6b;
    }
    ${ props => 
        props.open && 
        css`
            color: #ff8787;
            font-size: 80px;
        `
    }
`;


export const AgencyApplicationGuide = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-100%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    color:#ffd43b;
    font-size: 30px;
    &:hover {
        color: #fab005;
    }
`; 



export const HelpCenter = styled.div`
    width: 400px;
    height: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    position: fixed;
    right: 70px;
    bottom: 70px;
    z-index: 2;

    transition: all 0.2s linear;
    ${ props => 
        props.open && 
        css`
            height: 550px;
        `
    }
`;

export const PhotoContianer = styled.div`
    width: 300px;
    height: 300px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    div {
        font-size: 50px;
        color: black;
        position: absolute;
        right: -20px;
        top: -25px;
        transform: rotate(45deg);
        opacity: 0;
    }
    &::before {
        content: '${props => props.name}';
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        width: 0;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(92, 95, 120, 0.6);
        color: white;
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        z-index: 1;

        transition: all 0.3s linear;
    }
    &:hover {
        &::before {
            width: 100%;
            opacity: 1;
        }
        div {
            opacity: 1;
            z-index: 3;
        }
    }
`;

export const ArtistImageDiv = styled.div`
    min-width: 150px;
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    margin: 0;
    box-sizing: border-box;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    div {
        font-size: 30px;
        color: black;
        position: absolute;
        right: -10px;
        top: -15px;
        transform: rotate(45deg);
        opacity: 0;
    }
    &::before {
        content: '${props => props.name}';
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        width: 0;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(92, 95, 120, 0.6);
        color: white;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        z-index: 1;

        transition: all 0.3s linear;
    }
    &:hover {
        &::before {
            width: 100%;
            opacity: 1;
        }
        div {
            opacity: 1;
            z-index: 3;
        }
    }
`;

export const SearchContainer = styled.div`
    width: 350px;
    height: 55px;
    box-sizing: border-box;
    position: relative;
    input {
        width: 100%;
        height: 100%;
        padding: 1px 40px 1px 30px;
        box-sizing: border-box;
        border-radius: 50px;
        outline: none;
        border: 2px solid $footerColor;
        background-color: $backgroundColor;

        font-family: Yoon Minguk;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        &::placeholder {
            color: lightgray;
        }

    }
    .searchIcons {
        font-size: 30px;
        color: $footerColor;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-45%);
    }
`;

export const CategoryButton = styled.button`
    width: 250px;
    height: 70px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    outline: none;
    border: none;
    color: #AAAAAA;
    background: rgba(0,0,0,0);
    ${ props => 
        props.path && 
        css`
            color: #5C5F78;
        `
    }
`;

export const IconContainer = styled.div`
    font-size: ${props => props.size ? props.size : "30px"};
    color: ${props => props.color ? props.color : "black"};
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.position && css`position: absolute; left: 0; top: 50%; transform: translateY(-50%);`}
`;

export const CheckBoxContainer = styled.label`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
        display: none;
        &:checked ~ .checkBoxIcon {
            border-color: #5C5F78;
        }
        &:checked ~ .checkBoxIcon::before {
            height: 10px;
            transition: all .35s ease;
        }
        &:checked ~ .checkBoxIcon::after {
            height: 25px;
            transition: all .35s ease .35s;
        }
    }
    .checkBoxIcon {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: transparent;
        border: 2px solid #777777;
        border-radius: 5px;
        position: relative;
        cursor: pointer;
        &::before {
            content: '';
            display: inline-block;
            width: 5px;
            height: 0;
            background-color: #5C5F78;
            transform-origin: left top;
            border-radius: 5px;
            position: absolute;
            top:9px;
            left: 1px;
            transform:rotate(-45deg);
        }
        &::after {
            content: '';
            display: inline-block;
            width: 5px;
            height: 0;
            background-color: #5C5F78;
            transform-origin: left top;
            border-radius: 5px;
            position: absolute;
            top: 18px;
            left: 10px;
            transform:rotate(-135deg);
        }

    }
`;