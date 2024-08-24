import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ResultsDetails from "./ResultsDetail";

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style = {styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data ={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return <ResultsDetails result = {item} />
                }}
            />
        </View>
    );
};


const styles = StyleSheet.create ({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:7,
    }
});

export default ResultsList;