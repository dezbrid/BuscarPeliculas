import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, ActivityIndicator, SafeAreaView, FlatList } from 'react-native';
import { Card, Text, Button, Input } from 'react-native-elements';

import { movieResults, isSearchLoading } from '../../redux/selectors';
import { searchMovie } from '../../redux/actions/search';
import MovieResult from '../../components/MovieResult';

export default ({ route, navigation }) => {
  const { movieName } = route.params;
  const dispatch = useDispatch();
  const movies = useSelector(state => movieResults(state));
  /*const movies = [{
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    "Title": "The Lion King",
    "Type": "movie",
    "Year": "1994",
    "imdbID": "tt0110357"
  }]*/
  const isLoading = useSelector(state => isSearchLoading(state));
  const [isLooked, setIsLooked] = useState(false);
 
  useEffect(() => {
    if (movieName && !isLooked) {
      setIsLooked(true);
      dispatch(searchMovie(movieName));
    }
  });

  const renderMovies = () => {
    if (movies) {
      return (<FlatList
        data={movies}
        renderItem={({ item }) => <MovieResult {...item} />}
        keyExtractor={item => item.imdbID}
      />)
    } else if (isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" />
    } else {
      <View>
        <Text>no se encontro pelis</Text>
      </View>
    }
  };

  return (
    <SafeAreaView>
      {renderMovies()}
    </SafeAreaView>
  );
}