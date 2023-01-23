import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RooStackParams } from '../navigation/Navigation';
import { useMovie } from '../hooks';
import { MovieDetail } from '../components';

interface Props extends StackScreenProps<RooStackParams,'Detail'> {}


const {height:screenHeight} = Dimensions.get('screen');
export const Detail = ({route}:Props) => {

  const movie = route.params;

  const {poster_path,original_title,title,id} = movie;
 
  const uri = `https://image.tmdb.org/t/p/w500/${poster_path}`;

 const {isLoading,cast,movieFull} = useMovie(id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image 
          source={{uri}}
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.subTitle}>{original_title}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      {isLoading?
        <ActivityIndicator size={35} color="gray" style={{marginTop: 20}}/>
        :
        <MovieDetail cast= {cast} movieFull={movieFull!} />
      }  
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  imageContainer:{
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden'
  },
  image:{
    flex: 1,
  },
  container:{
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle:{
    fontSize: 16,
    opacity: 0.8
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  }
});