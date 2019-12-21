import React from 'react';
import {

  View,
  Text,
  Button

} from 'react-native';

export default ({navigation}) => {

    return(
    <View>
        <Text>home 5</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
    );
}