import React,{ Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import Enty from 'react-native-vector-icons/Entypo';

class Toolbar extends Component{
    
    render(){
        return(
        <View style={styles.container}>
            <View><Text> <Icon.Button name="home" size={28} backgroundColor="transparent" color="#A5A4A4">   
                </Icon.Button></Text>
            </View>
            <View><Text> <Icon.Button name="search" size={28} backgroundColor="transparent" color="#A5A4A4">   
                </Icon.Button></Text></View>
            <View><Text> <Enty.Button name="circle-with-plus" size={28}  backgroundColor="transparent" color="#D640AC">   
                </Enty.Button></Text></View>    
            <View><Text> <Icon.Button name="bell" size={28} backgroundColor="transparent" color="#A5A4A4">   
                </Icon.Button></Text></View>  
            <View><Text> <Icon.Button name="user" size={28} backgroundColor="transparent" color="#A5A4A4">   
                </Icon.Button></Text></View>          
        </View>)
    }
}

export default Toolbar;

const styles=StyleSheet.create({
    container:{
        borderColor:"#000",
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#fff',
        marginLeft:20,
        marginRight:20,
        borderRadius:40,
        overflow: 'hidden',
     
        height:60,
        marginBottom:20,     
    }
})