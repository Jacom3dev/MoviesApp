import React from 'react'
import { Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import currencyFormatter from "currency-formatter";
import { Cast,MovieFull } from '../interfaces';

interface Props {
  movieFull: MovieFull,
  cast: Cast[]
}
export const MovieDetail = ({movieFull,cast}:Props) => {

  const {vote_average,genres,overview,budget} = movieFull;
  return (
    <>
      <View style={{marginHorizontal:20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16}/>
          <Text>{vote_average}</Text>
            <Text style={{marginLeft: 5}}>
              -{genres.map(g=>g.name).join(', ')}
            </Text>
        </View>
        <Text style={{fontSize: 20,marginTop: 10,fontWeight: 'bold'}}>Historia</Text>
        <Text style={{fontSize:16}}>{overview}</Text>
        <Text style={{fontSize: 22,marginTop: 10,fontWeight: 'bold'}}>Presupuesto</Text>
        <Text style={{fontSize:18}}>{currencyFormatter.format(budget,{code:'USD'})}</Text>
      </View>
    </>
  )
}

