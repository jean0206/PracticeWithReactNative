import React from "react"
import { Component } from "react";
import {View,Text,FlatList} from "react-native";
import Card from "./card_component"

function FeedListLayout(props){


        const users=[{
            photo:"https://instagram.fclo7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122881204_1720290231462775_5555648117169552874_n.jpg?_nc_ht=instagram.fclo7-1.fna.fbcdn.net&_nc_ohc=AcTsAvZY_lgAX_NE3aZ&_nc_tp=25&oh=4a7e16aa014330eb4cb52539b9784cdc&oe=5FDF12AE",
            photo_published:"https://i.blogs.es/e5da95/sony_a9_v50-01/500_333.jpg",
            name:"DotCsv",
            city:"EUUU",
            key:"1"
        },{
            photo:"https://instagram.fclo7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123248457_201781354681147_8858420803324576383_n.jpg?_nc_ht=instagram.fclo7-1.fna.fbcdn.net&_nc_ohc=UZTI_SsDIHkAX-9_lUR&_nc_tp=25&oh=52dd236eaa048b19f4f59b7e195ff146&oe=5FE00718",
            photo_published:"https://instagram.fclo7-1.fna.fbcdn.net/v/t51.2885-15/e35/118516633_2459607447671524_7523240406831048913_n.jpg?_nc_ht=instagram.fclo7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=OJgwd83VuJoAX-LdMVv&tp=18&oh=c767dc08104919e3a218ee6df592b8a1&oe=5FDE8F2A",
            name:"Sofi",
            city:"Palmira, Valle",
            key:"2"
        },
        {
            photo:"https://instagram.fclo7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/80607876_2556199787992263_972338440710389760_n.jpg?_nc_ht=instagram.fclo7-1.fna.fbcdn.net&_nc_ohc=-GlU_fqZvpIAX9hUks1&_nc_tp=25&oh=1616a195ecdbe2f7b972eb1b3b716f30&oe=5FDC91F5",
            photo_published:"https://instagram.fclo7-1.fna.fbcdn.net/v/t51.2885-15/e35/125569933_683789702512223_8715494876167600567_n.jpg?_nc_ht=instagram.fclo7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=C9c3gTIioxMAX9bGzs6&tp=18&oh=3f1bf3da7db8b7a8bd8cc15c98357900&oe=5FDEF2F4",
            name:"Sofi",
            city:"Cali",
            key:"3"
        },
    ]
        return(<FlatList
        data={users}
        renderItem={({item})=><Card photo={item.photo} photo_published={item.photo_published} name={item.name} city={item.city}></Card>}
        >
            
        </FlatList>)
  

}

export default FeedListLayout;