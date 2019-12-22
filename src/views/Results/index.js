import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View } from 'react-native';
import { Card, Text, Button, Input } from 'react-native-elements'

import { searchMovie } from '../../redux/actions/search';

export default ({route, navigation}) => {
  const { movieName } = route.params;
  const dispatch = useDispatch();
  //const movies = useSelector(state => movieResults(state));
  //const isLoading = useSelector(state => isSearchLoading(state));
  const [isLooked, setIsLooked] = useState(false);
  useEffect(() => {
    
    if (movieName && !isLooked) {
        setIsLooked(true);
        dispatch(searchMovie(movieName));
    }
});
  return (
    <View>
      <Text>results 1 {movieName}</Text>
    </View>
  );
}