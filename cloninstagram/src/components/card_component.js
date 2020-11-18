import React from "react"
import Icon from 'react-native-vector-icons/Feather';
import {View,Text,StyleSheet,Image,ImageBackground} from 'react-native'

function Cards(props){
    return(<View >
        <View style={styles.header}>
            <View style={styles.avatar}>
                <Image style={styles.avatar_img} source={{uri:props.photo}}></Image>
            </View>
            <View >
            <Text style={styles.header_text}>{props.name}</Text>
            <Text style={styles.header_text2}>{props.city}</Text>
            </View>
        </View>
        <ImageBackground style={styles.container} source={{uri:props.photo_published}}>
        <View style={styles.icons}>
            <View>
            <Text style={{}}> <Icon.Button name="heart" size={28} backgroundColor="transparent" color="#fff">228 
                </Icon.Button></Text>
            </View>
            <View>
            <Text style={{fontWeight:'bold'}}> <Icon.Button  name="message-square" size={28}  backgroundColor="transparent" color="#fff">   
               154 </Icon.Button></Text>
            </View>
            <View style={styles.alignRight}>
            <Text >  <Icon.Button name="tag" size={28}  backgroundColor="transparent" color="#fff">   
                </Icon.Button></Text>
            </View>
        </View>
        </ImageBackground>
        
      
    </View>)
}

export default Cards;

const styles =StyleSheet.create({
    container:{
     
        height:435,
        marginLeft:20,
        marginRight:20,
        color:"white",
        marginBottom:6,
        borderRadius:22,
        overflow:'hidden'
    },
    icons:{
        flexDirection:'row',
        flex:1,
        alignItems:'flex-end'
    },
    alignRight:{
        flex: 1,
       flexDirection: 'row',
       justifyContent: 'flex-end',     
    },
    header:{
        marginLeft:20,
        marginRight:20,
        flexDirection:"row",
        height:50,
   
        color:"white",
        
    },
    avatar:{
        width:50,
        height:80,
        marginLeft:6,
        paddingTop:0
    },
    avatar_img:{
        width:40,
        height:40,
        borderRadius:20,

    },
    header_text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#171717'
    },
    header_text2:{
        marginTop:0,
        marginTop:-6,
        fontSize:16,
        fontWeight:'bold',
        color:'#A5A4A4'
    }
})