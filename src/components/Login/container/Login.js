import React from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text as TextNative,
} from 'native-base';
import {View, Image} from 'react-native';
export const Login = () => {
  return (
    <Container>
      <View
        style={{
          //   backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/img/chiper-logo.png')}
          style={{width: '50%', height: '30%'}}
          resizeMode="contain"
        />
      </View>
      <Content
        style={{paddingHorizontal: '10%'}}
        contentContainerStyle={{
          justifyContent: 'center',
          //   flex: 1,
        }}>
        <View>
          <Form>
            <Item style={{marginVertical: 10}}>
              <Input placeholder="Nombre" />
            </Item>
            <Item style={{marginVertical: 10}}>
              <Input placeholder="Correo" />
            </Item>
            <Item style={{marginVertical: 10}}>
              <Input placeholder="Contraseña" />
            </Item>
          </Form>
          <Button
            block
            rounded
            style={{marginVertical: 10, backgroundColor: '#FF0136'}}>
            <TextNative>Entrar</TextNative>
          </Button>
        </View>
      </Content>
    </Container>
  );
};
