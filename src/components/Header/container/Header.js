import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import {Icon} from 'react-native-elements';
/**
 * Constants
 */
const {colors} = require('../../../constants/theme');
export default function Header(props) {
  console.log(props.onPress.navigate);
  return (
    <View>
      <StatusBar hidden={true} />
      <View
        style={{backgroundColor: 'white', flexDirection: 'row', height: 60}}>
        <View style={styles.containerOne}>
          <TouchableHighlight onPress={() => props.onPress.push('Profile')}>
            <Icon name="user" type="feather" style={styles.icon1} />
          </TouchableHighlight>
        </View>
        <View style={styles.containerTwo}>
          <Image
            style={styles.imgChiper}
            source={require('../../../assets/img/chiper-logo.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.containerThree}>
          <Icon name="bell" type="feather" style={styles.icon2} />
          <Icon name="search" type="feather" style={styles.icon3} />
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Recomendados</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOne: {
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  containerTwo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerThree: {
    flex: 1,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon1: {
    marginHorizontal: 20,
  },
  icon2: {
    marginHorizontal: 10,
  },
  icon3: {},
  imgChiper: {
    width: 60,
    height: 80,
  },
  title: {
    // backgroundColor: 'red',
    paddingHorizontal: 40,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
  },
});
