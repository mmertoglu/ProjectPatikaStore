import React from 'react';
import {View , Text , Image,StyleSheet,Dimensions} from 'react-native';

const Card = ({urunler}) => {
    return(
        <View style={styles.container} >
          <Image style={styles.myimages} source={{uri:urunler.imgURL}} ></Image> 
            <Text style={styles.myinfotext} >{urunler.title}</Text>
            <Text style={styles.mypricetext} >{urunler.price}</Text>
            {!urunler.inStock && <Text style={styles.product_inStock}>Stokta yok</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#F2ECEC',
        borderWidth:3,
        borderColor:'white',
        padding:10,
        justifyContent:'space-around'
        
        
    },
    myimages:{
        
        height:Dimensions.get('window').height/3,
        
        borderWidth:1,
        borderRadius:5,
        resizeMode:'stretch'
    },
    myinfotext:{
        fontSize:20,
        color:'black',
        fontWeight:'900'
    },
    mypricetext:{
        fontSize:16
    },
    product_inStock:{
        color:'red',
        fontSize:20
    }
})
export default Card;