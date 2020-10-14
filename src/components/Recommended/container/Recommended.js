/* eslint-disable react-native/no-inline-styles */
/**
 * Libraries
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import {OTSession, OTPublisher, OTSubscriber} from 'opentok-react-native';

/**
 * Components
 */
import Header from '../../Header/container/Header';
const data = {
  apiKey: '46893344',
  sessionId:
    '2_MX40Njg5MzM0NH5-MTU5OTIyNTkzNzA0Nn5pd1ZGaFRFUmltaWh6MDJEa0xrUitHcGd-fg',
  token:
    'T1==cGFydG5lcl9pZD00Njg5MzM0NCZzaWc9ZDVhMjU5NGIwMWQyYTY5MzU2ZTI2NDg0ZDBhNjIxNzJhYzAzMDg2YjpzZXNzaW9uX2lkPTJfTVg0ME5qZzVNek0wTkg1LU1UVTVPVEl5TlRrek56QTBObjVwZDFaR2FGUkZVbWx0YVdoNk1ESkVhMHhyVWl0SGNHZC1mZyZjcmVhdGVfdGltZT0xNTk5MjI1OTM3Jm5vbmNlPTAuNjg0MDk2MTI3MzI2MzA4MiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTk5MzEyMzM3JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
};
export default function Recommended(props) {
  let streamings = [
    {
      id: 1,
      name: 'Cocinando con panchita',
      description: 'Estamos cocinando con panchita',
      likes: 123,
    },
    {
      id: 3,
      name: 'Cocinando con panchita',
      description: 'Estamos cocinando con panchita',
      likes: 123,
    },
    {
      id: 3,
      name: 'Cocinando con panchita',
      description: 'Estamos cocinando con panchita',
      likes: 123,
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header onPress={props.navigation} />
      <OTSession
        apiKey={data.apiKey}
        sessionId={data.sessionId}
        token={data.token}>
        {/* <OTPublisher style={{ width: 100, height: 100 }} /> */}
        <OTSubscriber style={{width: '100%', height: 300}} />
      </OTSession>
      {/* {[1, 2, 3].map((item) => {
        return (
          <View
            style={{
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
            <TouchableHighlight
              underlayColor="transparent"
              style={{width: '100%'}}
              onPress={() => props.navigation.navigate('VideoStreamings')}>
              <View
                style={{
                  backgroundColor: '#C4C4C4',
                  height: 150,
                  width: '100%',
                  borderRadius: 8,
                }}>
                <Text> </Text>
              </View>
            </TouchableHighlight>
            <View
              style={{
                alignItems: 'flex-start',
                width: '100%',
                paddingVertical: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#C4C4C4',
                  width: '80%',
                  borderRadius: 8,
                  height: 10,
                }}>
                <Text> </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                width: '100%',
              }}>
              <View
                style={{
                  backgroundColor: '#C4C4C4',
                  width: '50%',
                  borderRadius: 8,
                  height: 10,
                }}>
                <Text> </Text>
              </View>
            </View>
          </View>
        );
      })} */}
    </View>
  );
}
