import {View, Text, ImageBackground} from 'react-native';
import FullScreenChz from 'react-native-fullscreen-chz';
import {StatusBar} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import styles from './HomeStyles';
import BatteryInfo from '../../components/batteryInfo/BatteryInfo';

const Home = () => {
  // StatusBar.setHidden(false)
  // StatusBar.setBackgroundColor('black');
  FullScreenChz.enable();
  return (
    <View style={styles.homeContainer}>

      <ImageBackground
        source={require('../../assets/images/background.png')}
        style={styles.backgroundImage}
      />

      <View>
        <Header />
      </View>

      <View>
        <BatteryInfo />
      </View>

    </View>
  );
};

export default Home;
