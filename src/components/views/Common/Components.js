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