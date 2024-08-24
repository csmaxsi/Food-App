import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";


const ResultsDetails = ({result}) => {
    return (
        <View style = {styles.container}>
            
            <Image style = {styles.image} source = {{ uri: result.image_url}} />
            <Text style = {styles.name }> {result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    
    name:{
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: -3,
    },
    
    image:{
        width: 250,
        height: 120,
        borderRadius:4,
        marginBottom:5,
    },

    container :{
        marginLeft: 15,
        marginBottom:8,
    },
});

export default ResultsDetails;