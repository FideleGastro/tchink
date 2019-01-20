import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Block = styled.div`
    width: 100%;
    min-height: 50px;
    background: #f4f4f4;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;  
    z-index: 10;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
`;

const Title = styled.h1`
    font-family: Montserrat;
    font-size: 35px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: center;
    color: #9c27b0;
    margin: 0 10px;
   
`;


class HomepageHeaderBlock extends Component {
    render() {
        return (
            <>
                <Block>
                    <Content>
                        <Title>TCH!NK</Title>
                    </Content>
                </Block>
            </>
        )
    }
}

export default (HomepageHeaderBlock);
