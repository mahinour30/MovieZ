import React from 'react'
import { View } from 'react-native'
import MovieList from '../../components/MovieList'
import { styles } from './style'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'

const MyMovies = ({ navigation }) => {
    const movies = useSelector(state => state.reducer.movieList)
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
                headerText={'Favorites'}
            />
            <MovieList
                movies={movies}
                navigation={navigation}
            />
        </View>
    )
}

export default MyMovies;