import {View, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import styles from './MenuStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faFan, faKey, faLock, faUnlockAlt} from '@fortawesome/free-solid-svg-icons';
import useMenu from './useMenu';

const Menu = () => {

    const { stateHandler, lock } = useMenu()


  return (
    <View style={styles.controls}>
      <TouchableOpacity style={styles.controlsIconWrapper}>
        <FontAwesomeIcon icon={faFan} size={24} style={styles.controlsIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.controlsIconWrapper}>
        <FontAwesomeIcon icon={faKey} size={24} style={styles.controlsIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.controlsIconWrapper} onPress={stateHandler} >
        <FontAwesomeIcon icon={ lock ? faLock : faUnlockAlt} size={24} style={styles.controlsIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
