import {View, Text} from 'react-native';
import React, { useState } from 'react';

const useMenu = () => {
  const [lock, setLock] = useState(false);

  const stateHandler = () => {
    if (lock) {
      setLock(false);
    } else {
      setLock(true);
    }
  };
  return {
    stateHandler,
    lock
  };
};

export default useMenu;
