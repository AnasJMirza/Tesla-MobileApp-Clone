import {View, Text} from 'react-native';
import React, { useState } from 'react';

const useControls = () => {
  const [lock, setLock] = useState(false);

  const stateHandler = () => {
    if (lock) {
      setLock(false);
    } else {
      setLock(true);
    }
  };

  const renderItem = (item) => {
    <View>
      <Text style={{color: 'white'}}>{ item.title }</Text>
    </View>
  }
  return {
    stateHandler,
    lock,
    renderItem
  };
};

export default useControls;
