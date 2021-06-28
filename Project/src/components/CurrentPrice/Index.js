import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import styles from "./styles"

export default function CurrentPrice(props){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ {props.lastCotation}</Text>
            <Text style={styles.textPrice}>Ultimo preço</Text>

        </View>
    )
}