import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './MenuStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCog, faFan, faKey, faLock} from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <View style={styles.controls}>
      <TouchableOpacity style={styles.controlsIconWrapper}>
        <FontAwesomeIcon icon={faFan} size={20} style={styles.controlsIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.controlsIconWrapper}>
        <FontAwesomeIcon icon={faKey} size={20} style={styles.controlsIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.controlsIconWrapper}>
        <FontAwesomeIcon icon={faLock} size={20} style={styles.controlsIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
