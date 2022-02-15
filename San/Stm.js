import React from 'react';
import {View , Text , FlatList, StyleSheet, TextInput,Image } from 'react-native';
import Card from './src/Card';
import urunler_data from './src/urunler_data.json';

export default class Stm extends React.Component{
    render() {
        return(
            <View style={styles.container} >
                <Text style={styles.myheadertext} > PATIKA STORE</Text>
                <TextInput 
                style={styles.mytextinput} 
                 placeholder='Ara...'
                />
                <View style={{flexDirection:'row'}}>
                <FlatList
                contentContainerStyle={{paddingBottom:150}}
                data={urunler_data}
                renderItem={({item})=> <Card urunler={item}/>}
                numColumns={2}
                ></FlatList>
                <Text>Selam</Text>
                </View>
               

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        alignItems:'center'
    },
    myheadertext:{
        fontSize:30,
        color:'#713BB8',
        marginTop:30,
        fontFamily:'ChrustyRock-ORLA'
    },
    mytextinput:{
        backgroundColor:'#F2ECEC',
        borderWidth:1,
        borderRadius:10,
        width:'95%',
        margin:10,
        marginTop:20
    }
})
