import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movie.interface';
import { Card } from './Card';


interface Props {
    title?: string,
    movies: Movie[]
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ height: title?260:220 }}>
           {title&&<Text style={styles.title}>{title}</Text>} 
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <Card movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10
    }
});