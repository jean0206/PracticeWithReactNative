import * as React from 'react';
import { Text, View ,StyleSheet,ScrollView,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import Enty from 'react-native-vector-icons/Entypo';
import ToolBar from './src/components/toolbar'
import Feed from './src/components/feed_list_layout'


export default function App() {
  return (
    <View style={styles.navigateBar}>
      <View style={styles.histories}>
        <View style={styles.circle_histories}>
            <Text>Stories</Text>
            <Text>View All</Text>
        </View>
      
        <View style={{flex:3}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.avatar}>
         
                <Image style={styles.avatar_img} source={{uri:"https://i.blogs.es/e5da95/sony_a9_v50-01/500_333.jpg"}}></Image>

          </View>
          <View style={styles.avatar}>
         
                <Image style={styles.avatar_img} source={{uri:"https://i.blogs.es/e5da95/sony_a9_v50-01/500_333.jpg"}}></Image>

          </View>
          <View style={styles.avatar}>
         
                <Image style={styles.avatar_img} source={{uri:"https://i.blogs.es/e5da95/sony_a9_v50-01/500_333.jpg"}}></Image>

          </View>
          <View style={styles.avatar}>
         
                <Image style={styles.avatar_img} source={{uri:"https://i.blogs.es/e5da95/sony_a9_v50-01/500_333.jpg"}}></Image>

          </View>
          <View style={styles.avatar}>
         
                <Image style={styles.avatar_img} source={{uri:"https://i.blogs.es/e5da95/sony_a9_v50-01/500_333.jpg"}}></Image>

          </View>
          <View style={styles.avatar}>
         
                <Image style={styles.avatar_img} source={{uri:"https://i.blogs.es/e5da95/sony_a9_v50-01/500_333.jpg"}}></Image>

          </View>
          </ScrollView>
        </View>
        
        </View>
      <ScrollView style={styles.navigateBar} >
        <Feed></Feed>
      </ScrollView > 
      <View style={styles.backgroundTool}>
      <ToolBar  ></ToolBar>
      </View>      
    </View>
    
  /*
    <NavigationContainer >
      <Tab.Navigator style={styles.navigateBar}>
        <Tab.Screen  options={options}   name="Home"  component={HomeScreen} />
        <Tab.Screen options={options_2} name="Settings" component={SettingsScreen} />
        <Tab.Screen options={options_3} name="Add" component={Add_photo_screen} />
        <Tab.Screen options={options_4} name="notifications" component={notifications} />
        <Tab.Screen options={options_5} name="user" component={User} />
      </Tab.Navigator>
    </NavigationContainer>*/
 
  );
}

const styles=StyleSheet.create({
  navigateBar:{
    backgroundColor:'#fff',
    zIndex:1,
    flex:1,
  },ToolBar:{
    alignContent:'center',
    justifyContent:'center',
  
  },backgroundTool:{
    backgroundColor: 'transparent',
    position:'absolute',

    bottom:20,
    zIndex:200,
    marginLeft:35
  },
  histories:{
    height:100,
    borderRadius:6,
    overflow: 'hidden',
  },
  scroll:{
    flex:1
  },
  circle_histories:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:7
  },
  avatar:{
    width:70,
    height:0,
    marginLeft:6,

    paddingTop:0
},
avatar_img:{
    width:60,
    height:60,
    borderRadius:30,
    marginHorizontal:5,
    borderColor:'black',
    borderWidth:2
},
})