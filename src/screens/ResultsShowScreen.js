import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ResultsShowScreen = ({ route }) => {

    const [result, setResult] = useState(null);
    const id = route.params.id;

    const getResult = async (id) => {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);   
    };

    useEffect(() => {
      getResult(id);
    }, []);

    if (!result){
      return null;
    }

    return (
      <View>
        <Text>{result.name}</Text>
        {
          result.image_url ? (
            <Image
              style ={styles.image}
              source={{uri:result.image_url}}
            />
          ) : (
            <MaterialCommunityIcons
              style={[styles.image, styles.icon]}
              name="camera-off"
              size={120}
            />
          )
        }
      </View>
    );
};

const styles = StyleSheet.create({

  image:{
    height: 200,
    width: '100%',
  },

  icon:{
    backgroundColor: 'lightgrey',
    color: 'grey',
    textAlign: 'center'
  },
});

export default ResultsShowScreen;