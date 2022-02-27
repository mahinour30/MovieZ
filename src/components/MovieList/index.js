import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../common'
import { ImageURL } from '../../utils'
import { styles } from './style'

const MovieList = (props) => {
    return (
        <FlatList
            data={props.movies}
            keyExtractor={(item) => { item.id }}
            ListEmptyComponent={
                <Text style={styles.empty}>No movies to show</Text>
            }
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('MovieDetails', { item: item })}
                        style={styles.movieCard}>
                        <Image
                            source={{ uri: ImageURL + item.poster_path }}
                            resizeMode={'contain'}
                            style={styles.moviePoster}
                        />
                        <View style={styles.detailsCon}>
                            <View>
                                <Text style={styles.movieTitle}>{item.title}</Text>
                                <Text style={styles.releaseDate}>{item.release_date}</Text>
                            </View>
                            <View style={styles.rowCon}>
                                <Text style={styles.lang}>{item.original_language}</Text>

                                <View style={styles.rate}>
                                    <Icon style={styles.star} name='star' size={20} />
                                    <Text style={styles.vote}>{item.vote_average}</Text>
                                </View>

                            </View>

                        </View>



                    </TouchableOpacity>
                )
            }}
        />
    )
}

export default MovieList;