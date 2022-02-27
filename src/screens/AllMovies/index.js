import React, { useEffect, useState } from 'react'
import { View, TextInput, TouchableOpacity, Alert } from 'react-native'
import MovieList from '../../components/MovieList'
import { getMovies } from '../../services/movies'
import { styles } from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../common'

const AllMovies = ({ navigation }) => {

    const [movies, setMovies] = useState([])
    const [movieList, setMovieList] = useState([])
    const [movieSearch, setMovieSearch] = useState('')

    const handleGetMovies = async () => {
        await getMovies().then(
            response => {
                setMovies(response.data.results)
                setMovieList(response.data.results)
            })
            .catch(
                Alert.alert('Something went wrong, Please try again')
            )
    }
    useEffect(() => {
        handleGetMovies()
    }, [])

    const handleSearch = () => {
        let newMovieList = movieList.filter(movie => {
            if (movie.original_title.toLowerCase().includes(movieSearch.toLowerCase())) {
                return movie
            }
        })
        if (movieSearch == '') {
            setMovieList(movies)
        } else {
            setMovieList(newMovieList)
        }

    }

    useEffect(() => {
        handleSearch()
    }, [movieSearch])

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    placeholder={'Search...'}
                    placeholderTextColor={COLORS.silver}
                    onChangeText={(val) => setMovieSearch(val)}
                />
                <TouchableOpacity onPress={() => navigation.navigate('MyMovies')}>
                    <Icon style={styles.favorite} name='heart' size={30} />
                </TouchableOpacity>
            </View>
            <MovieList
                movies={movieList}
                navigation={navigation}
            />
        </View>
    )
}

export default AllMovies;