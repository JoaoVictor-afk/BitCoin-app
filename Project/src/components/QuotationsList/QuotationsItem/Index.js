import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from "./styles"

export default function QuotationsItem(props){
    return(
        <View style={styles.mainContent}>
          <View style={styles.contentLeft}>
           <View style={styles.boxLogo}>
               <Image style={styles.logoBit}
            source={require("../../../../assets/favicon.png")}/>
                <Text style={styles.Date}>{props.data}</Text>
            </View>
           </View>
            <View style={styles.contentRight}>
               <Text style={styles.Price}>{props.valor}</Text>
            </View>
           
        </View>
    )
}