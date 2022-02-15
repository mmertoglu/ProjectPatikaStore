import React from "react";
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Settings = () => {
    return(
      <Text >Sıgn Up Page</Text> 
    )
}

const styles = StyleSheet.create({
    linearGradient:{
      flex:1,
      alignItems:'center'
    },
    mytext:{
        color:'white',
        fontSize:40
    
    },
    myfacebookbutton:{
        width:200 , 
        height:40 ,
        borderRadius:10,
        flexDirection:'row',
        padding:5,
        alignItems:'center'
        
        
    },
    myinstagrambutton:{
        width:200 , 
        height:40 ,
        borderRadius:10,
        flexDirection:'row',
        padding:5,
        alignItems:'center'
        
    }
})
export default Settings;