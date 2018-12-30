import React, { Component } from 'react'

export default class homepage extends Component {
    render() {
        return (
            <div>
                <Title>homepage</Title>
            </div>
        )
    }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
