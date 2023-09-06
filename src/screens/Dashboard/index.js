import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styels';

function DashboardScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('PostDetails')}>
        <Text>Dashboard Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DashboardScreen;
