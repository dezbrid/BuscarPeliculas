import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, Text, Button, Input } from 'react-native-elements'

export default ({route, navigation}) => {
  const { movieName } = route.params;
  
  return (
    <View>
      <Text>results 1 {movieName}</Text>
    </View>
  );
}