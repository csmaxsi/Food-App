import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {Octicons} from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style ={styles.mainView}>
        
        <Octicons style = {styles.image} name="search" size={30} color="black" />
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style ={styles.searchInput} 
            placeholder="Search" 
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
        <View></View>
    </View>
  );
};

const styles = StyleSheet.create ({
    mainView:{
        backgroundColor:'#F0EEE0',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        marginTop:10,
        marginBottom:10,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15,

    },

    searchInput:{
        
        flex:1,
        marginLeft:20,
        height:40,
        fontSize:20,
        
    },

    image:{
        marginLeft:10,
    }
});

export default SearchBar;
