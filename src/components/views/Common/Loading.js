import React from 'react';
import styled from 'styled-components';
import '../../scss/Loading.scss';

const LoadingPage = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(92, 95, 120, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Loading() {
    return (
        <LoadingPage>
            <h1 className="title">
                <span>LOADING...</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wait</span>
            </h1>
        </LoadingPage>
    );
}

export default Loading;