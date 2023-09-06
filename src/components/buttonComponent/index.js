import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {styles} from './styles';

const ButtonComponent = ({onPress, title, disabled, loading}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={disabled ? styles.disabledButton : styles.button}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
