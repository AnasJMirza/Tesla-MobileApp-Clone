import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './HeaderStyle'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <FontAwesomeIcon icon={ faCog } size={24} style={styles.headerIcon} />
      </TouchableOpacity>
      <Text style={styles.homeTitle}>Mehran VXR</Text>
      <TouchableOpacity>
        <FontAwesomeIcon icon={ faToolbox } size={24} style={styles.headerIcon} />
      </TouchableOpacity>
    </View>
  )
}

export default Header