import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './ControlsStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import useControls from './useControls';
import MenuItems from '../menuItems/MenuItems';
import items from '../menuItems/items';

const Controls = () => {
  const {stateHandler, lock} = useControls();

  return (
    <ScrollView style={{marginBottom: 200}}>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlsIconWrapper}>
          <FontAwesomeIcon icon={faFan} size={24} style={styles.controlsIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlsIconWrapper}>
          <FontAwesomeIcon icon={faKey} size={24} style={styles.controlsIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlsIconWrapper}
          onPress={stateHandler}>
          <FontAwesomeIcon
            icon={lock ? faLock : faUnlockAlt}
            size={24}
            style={styles.controlsIcon}
          />
        </TouchableOpacity>
      </View>

      <View>
        {/* <MenuItems /> */}

        {items.map(item => (
          <TouchableOpacity style={styles.itemWrapper} key={item.id}>
            <View style={styles.iconInfo}>
              <FontAwesomeIcon
                icon={item.icon}
                size={24}
                style={styles.menuIcon}
              />
              <View style={styles.iconTextWrapper}>
                <Text style={styles.iconText}>{item.title}</Text>
                { item.subTitle ? <Text style={styles.iconTextSub}>{item.subTitle}</Text> : "" }
              </View>
            </View>
            <FontAwesomeIcon
              icon={faChevronRight}
              size={24}
              style={styles.menuIconArrow}
            />
            
          </TouchableOpacity>
          
        ))}
        {/* <View><Text>Anas</Text></View>
        <View><Text>Anas</Text></View>
        <View><Text>Anas</Text></View>
        <View><Text>Anas</Text></View>
        <View><Text>Anas</Text></View>
        <View><Text>Anas</Text></View>
        <View><Text>Anas</Text></View>
        <View><Text>Anas</Text></View>
        <View><Text>Anas</Text></View>
        <View><Text>Anas</Text></View> */}
      </View>
    </ScrollView>
  );
};

export default Controls;
