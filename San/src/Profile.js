import React from "react";
import {View , Text , StyleSheet} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

const Profile = () => {
    return(
        <LinearGradient 
        colors={['#200122' , '#6f0000']}
        style={styles.linearGradient} >
            <Text style={styles.mytext} >Selam</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    mytext:{
        color:'white',
        fontSize:40
    
    },
    linearGradient:{flex:1}
})
export default Profile;