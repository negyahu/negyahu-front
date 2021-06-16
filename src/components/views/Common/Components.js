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
    transform: translate(-50%, -50%);
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
    width: 350px;
    height: 350px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    div {
        font-size: 60px;
        color: black;
        position: absolute;
        right: -25px;
        top: -30px;
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
    height: 150px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    margin: 10px 75px 0 0;
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