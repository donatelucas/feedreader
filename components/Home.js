import React, { Component } from 'react';
import { Header, Container, Title, Content } from 'native-base';
import { Text } from 'react-native';

export default class Home extends Component {
  render() {
    return (
        <Container>
        <Header>
            <Title>Feed Reader</Title>
        </Header>
            <Content>
                <Text>Hello!</Text>
            </Content>
        </Container>
    );
  }
}
