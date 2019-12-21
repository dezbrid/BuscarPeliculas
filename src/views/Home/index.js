import React from 'react';
import { View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Text, Button, Input } from 'react-native-elements'
import {styles,containerStyles} from './styles';

export default ({ navigation }) => {

  return (
    <View style={styles.view}>
      <Card containerStyle={containerStyles.card}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Bienvenvido!</Text>
          <Icon name='film' />
        </View>
        <Input
          containerStyle={containerStyles.inputSearch}
          placeholder='Buscar...' />
        <View style={styles.buttonsView}>
          <Button containerStyle={containerStyles.buttons} type="outline" title='Limpiar' />
          <Button containerStyle={containerStyles.buttons} title='Buscar' />
        </View>
      </Card>
    </View>
  );
}