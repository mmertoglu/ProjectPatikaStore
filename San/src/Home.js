import React from "react";
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Checkbox from '@react-native-community/checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from "@react-navigation/native";




const App = ({navigation}) => {
    
    return (
        <LinearGradient
            colors={['#181454', '#4A44A3']}
            style={styles.linearGradient} >
            <View style={styles.linearGradient} >
                <View style={styles.mylanguagecontainer} >
                    <Text style={styles.mylanguagetext} >Language : ENG</Text>
                </View>
                <View style={styles.mylogincontainer} >
                    <Text style={styles.mylogintext} >Login</Text>
                    <Text style={styles.myemailtext} >Email</Text>
                    <TextInput style={styles.mytextinput} ></TextInput>
                    <Text style={styles.myemailtext} >Password</Text>
                    <TextInput secureTextEntry={true} style={styles.mytextinput} ></TextInput>
                    <View style={{ flexDirection: 'row', margin: 10, marginLeft: 0, alignItems: 'center' }} >
                        <Checkbox
                            value={false}
                            
                                
                            
                        />
                        <Text style={{ color: 'black', fontSize: 16, marginLeft: 5 }} >Remember Me</Text>
                    </View>
                    <View style={styles.myloginbutton} >
                        <TouchableOpacity  >
                            <Text style={{ color: 'white', fontSize: 18}} >Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mysocialmediacontainer} >
                        <LinearGradient
                            colors={['#181454', '#4A44A3']} style={{ borderRadius: 5, marginLeft: 60 }}
                        >
                            <TouchableOpacity style={styles.myfacebookbutton} >
                                <FontAwesome name="facebook" size={20} color={'white'} />
                                <Text style={{ fontSize: 16, color: 'white', marginLeft: 10 }} >Login With Facebook</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient
                            colors={['#833AB4', '#C13584', '#BA8520']}
                            style={{ borderRadius: 5, margin: 10, alignItems: 'center', justifyContent: 'center', marginLeft: 60 }}
                        >
                            <TouchableOpacity style={styles.myinstagrambutton} >
                                <FontAwesome name='instagram' size={20} color={'white'} />
                                <Text style={{ color: 'white', marginLeft: 10, fontSize: 16 }} >Login With Instagram</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient
                            colors={['#DB4437', '#F4B400', '#0F9D58']}
                            style={{ borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 60 }}
                            start={{ x: 0.3, y: 0 }}
                            end={{ x: 0.7, y: 1 }}
                        >
                            <TouchableOpacity style={styles.myinstagrambutton} >
                                <FontAwesome name='google' size={20} color={'white'} />
                                <Text style={{ color: 'white', marginLeft: 10, fontSize: 16 }} >Login With Google</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                </View>
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{ color: 'white', marginTop: 10 }} >Don't have an account</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Sıgnup')} >
                        <Text style={{ color: 'aqua', marginTop: 10, marginLeft: 5 }} >Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </LinearGradient>
    )
}



const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center'
    },
    mytext: {
        color: 'white',
        fontSize: 40,
        fontFamily:'Orbitron'

    },
    mylanguagetext: {
        color: 'white',
        fontSize: 16,
        fontFamily:'Orbitron'
    },
    mylogincontainer: {
        marginTop: 60,
        borderRadius: 10,
        borderColor: 'white',
        width: 350, height: 500,
        alignItems: 'flex-start',
        borderWidth: 4,
        padding: 10,
        backgroundColor: '#E8E7EE',
        marginBottom:20

    },
    mylanguagecontainer: {
        width: 200,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 40,

    },
    mylogintext: {
        color: 'black',
        fontSize: 36,
        marginLeft: 110
    },
    myemailtext: {
        color: 'black',
        fontSize: 16,
        marginTop: 30
    },
    mytextinput: {
        color: 'black',
        borderRadius: 5,
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black'
    },
    myloginbutton: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#181454',
        marginTop: 20,
        width: 200,
        marginLeft: 60,
        height: 30,
        marginBottom: 20


    },
    myfacebookbutton: {
        width: 200,
        height: 30,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',




    },
    myinstagrambutton: {
        width: 200,
        height: 30,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center'

    },
    mysocialmediacontainer: {
        width: '100%',
        alignItems: 'baseline',



    }
})
export default App;