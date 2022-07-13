import { View, Text } from 'react-native'
import React from 'react'
import styles from './HeaderStyle'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <FontAwesomeIcon icon={ faCog } size={20} style={styles.headerIcon} />
      <Text style={styles.homeTitle}>Model S</Text>
      <FontAwesomeIcon icon={ faToolbox } size={20} style={styles.headerIcon} />
    </View>
  )
}

export default Header