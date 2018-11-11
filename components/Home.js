import React, { Component } from 'react';
import { Header, Container, Title, Content, Card, CardItem } from 'native-base';
import { Text, Image, Dimensions } from 'react-native';

let WIDTH = Dimensions.get('window').width;

export default class Home extends Component {
  render() {
    return (
        <Container>
            <Header>
              <Title>Feed Reader</Title>
            </Header>
            <Content>
                <Card style={{margin: 10}}>
                    <CardItem>
                        <Text>Title Goes Here</Text>
                    </CardItem>
                    <CardItem>
                        <Image style={{resizeMode: 'cover'}} source={{uri: "https://placekitten.com/640/440", width: 350, height: 300}} />
                    </CardItem>
                    <CardItem>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, leo id pellentesque malesuada, diam ex porttitor metus, vel mollis nunc diam ac enim. Nunc et finibus risus. Maecenas in dolor sed diam eleifend finibus in sit amet quam. Suspendisse ultrices magna egestas, ultricies mi quis, hendrerit lacus. Aenean in commodo odio. Vivamus sed tristique lorem, a sagittis est. Mauris id turpis eu ipsum laoreet ultricies. Pellentesque condimentum mi nisl, eget ultrices neque volutpat quis. Nunc vel orci sed tortor iaculis rhoncus sed fringilla turpis. Duis quis interdum mi, eget pharetra tortor. Quisque sit amet felis eleifend tortor dignissim auctor.</Text>
                    </CardItem>
                </Card>
            </Content>
      </Container>
    );
  }
}
