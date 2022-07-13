import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './BatteryInfoStyle'

const BatteryInfo = () => {
  return (
    <View >
      <View style={styles.batterySection}>
        <Image
        source={require('../../assets/images/battery.png')}
        style={styles.batteryImage}
         />
        <Text style={styles.batteryText}>120 mi</Text>
      </View>
      <View style={styles.parkState}>
        <Text style={styles.parkStateText}>Parked</Text>
      </View>
    </View>
  )
}

export default BatteryInfo