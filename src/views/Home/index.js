import React, { useState } from 'react';
import { View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Text, Button, Input } from 'react-native-elements'
import { styles, containerStyles } from './styles';

export default ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const handleSearchTextChange = text => {
    setSearchText(text)
  };
  const handleCleanTextClick = event => {
    setSearchText('');
  };
  const handleSearchTextClick = event => {


    navigation.navigate('Results', {

      movieName: searchText,
    });
  };
  
  return (
    <View style={styles.view}>
      <Card containerStyle={containerStyles.card}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Bienvenvido!</Text>
          <Icon name='film' />
        </View>
        <Input
          containerStyle={containerStyles.inputSearch}
          placeholder='Buscar...'
          value={searchText}
          onChangeText={handleSearchTextChange} />
        <View style={styles.buttonsView}>
          <Button
            containerStyle={containerStyles.buttons}
            type="outline"
            title='Limpiar'
            onPress={handleCleanTextClick} />
          <Button
            containerStyle={containerStyles.buttons}
            title='Buscar'
            onPress={handleSearchTextClick} />
        </View>
      </Card>
    </View>
  );
}