import { View, Text, ImageBackground } from 'react-native'
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import React from 'react'
import Header from '../../components/header/Header'
import styles from './HomeStyles'


const Home = () => {
    StatusBar.setHidden(false)
    StatusBar.setBackgroundColor('black'); 
  return (
    <View style={styles.homeContainer}>
        <ImageBackground 
        source={require('../../assets/images/background.png')}
        style={styles.backgroundImage} />
      <Header />
    </View>
  )
}

export default Home