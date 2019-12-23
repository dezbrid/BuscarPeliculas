import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Tile, Text, Card, Image } from 'react-native-elements';
import { containerStyles, styles } from './styles';

const MovieResult = ({ Title, Poster, Type, Year, imdbID }) => {

    return (
        <Tile
            title={Title}
            imageSrc={{ uri: Poster }}
            imageProps={{
                PlaceholderContent: <ActivityIndicator />,
                resizeMode: 'stretch',
                style:styles.imagen
            }}
            titleNumberOfLines={1}
            containerStyle={{display:'flex'}}
            contentContainerStyle={{backgroundColor:'blue',flex:1  }}
        >
            <View
                
            >
                <Text>{Year}</Text>
                <Text>{Type}</Text>
            </View>

        </Tile>
    )

}
export default MovieResult;