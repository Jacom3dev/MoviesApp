import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces';


interface Props {
  movie: Movie,
  width?: number,
  height?:number
}

export const Card = ({movie,width=300,height=420}:Props) => {

  const {poster_path} = movie;
  const {navigate} = useNavigation();
  
  const uri = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <TouchableOpacity
      onPress={()=>navigate('Detail' as never,movie as never)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 8
      }}
    >
      <View style={styles.imgContainer}>
        <Image
          source={{uri}}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  imgContainer:{
    flex: 1
  },
  image: {
    flex: 1,
    borderRadius: 18,
  }
});
