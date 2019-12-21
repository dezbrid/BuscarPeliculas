import React from 'react';
import { View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Text, Button, Input } from 'react-native-elements'
import styles from './styles';

export default ({ navigation }) => {

  return (
    <View style={styles.view}>
      <Card containerStyle={styles.card}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Bienvenvido!</Text>
          <Icon name='film' />
        </View>
        <Input
          containerStyle={styles.inputSearch}
          placeholder='Buscar...' />
        <View style={styles.buttonsView}>
          <Button containerStyle={styles.buttons} title='Limpiar' />
          <Button containerStyle={styles.buttons} title='Buscar' />
        </View>
      </Card>
    </View>
  );
}