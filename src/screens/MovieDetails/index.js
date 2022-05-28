import React, { useEffect, useState } from 'react'
import { ScrollView, Text, Image, FlatList } from 'react-native'
import Header from '../../components/Header'
import { ImageURL, handleGenre } from '../../utils';
import { styles } from './style';
import { useDispatch } from 'react-redux';
import { add, del } from '../../redux/actions'
import { useSelector } from 'react-redux';

const MovieDetails = ({ navigation, route }) => {
    const { item } = route.params
    const dispatch = useDispatch();
    const movies = useSelector(state => state.reducer.movieList)
    const [fav, setFav] = useState(false)

    useEffect(() => {
        {
            handleFav(item.id)
        }
    }, [movies])

    const handleFav = (id) => {
        movies.filter(item => {
            if (id == item.id) {
                setFav(true)
            }
        })
    }

    const handleDel = () => {
        dispatch(del(item.id))
        setFav(false)
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollCon}>
            <Header
                navigation={navigation}
                headerText={item.original_title}
                icon={fav ? 'heart' : 'heart-outline'}
                onPressIcon={() => {
                    fav ?
                        handleDel()
                        :
                        dispatch(add(item))
                }}
            />
            <Image
                source={{ uri: ImageURL + item.poster_path }}
                resizeMode={'contain'}
                style={styles.moviePoster}
            />
            <Text style={styles.info}>{item.overview}</Text>
            <Text style={styles.title}>Release date</Text>
            <Text style={styles.info}>{item.release_date}</Text>
            <Text style={styles.title}>Genre</Text>

            <FlatList
                data={item.genre_ids}
                keyExtractor={item => item.index}
                horizontal={true}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.info}> {handleGenre(item)} </Text>
                    )
                }}
            />
            <Text style={styles.title}>Language</Text>
            <Text style={styles.info}>{item.original_language}</Text>
            <Text style={styles.title}>Average vote</Text>
            <Text style={styles.info}>{item.vote_average}</Text>
            <Text style={styles.title}>Total votes</Text>
            <Text style={styles.info}>{item.vote_count}</Text>
        </ScrollView>
    )
}

export default MovieDetails;