import React, { Fragment } from 'react';
import {  Text, View, FlatList, ScrollView, TouchableOpacity, ProgressViewIOSComponent } from 'react-native';
import styles from "./styles"
import QuotationsItem from './QuotationsItem/Index';

export default function QuotationsList(props){
const daysQuerey=props.filterDay

    return(
    <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity style={styles.buttonQuery}
            onPress={()=>daysQuerey(7)}>
                <Text style={styles.buttonText}>7D</Text>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery}
            onPress={()=>daysQuerey(15)}>
                <Text style={styles.buttonText}>15D</Text>
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonQuery}
            onPress={()=>daysQuerey(30)}>
                <Text style={styles.buttonText}>1M</Text>
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonQuery}
            onPress={()=>daysQuerey(90)}>
                <Text style={styles.buttonText}>3M</Text>
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonQuery}
            onPress={()=>daysQuerey(180)}>
                <Text style={styles.buttonText}>6M</Text>
                
            </TouchableOpacity>
        
        
        
        </View>
        <ScrollView>
            
            <FlatList data={props.listTransactions}
            renderItem={({item})=>{
                return <QuotationsItem valor={item.valor} data={item.data}/>
            }}
            
            />

        </ScrollView>

        </Fragment>
    )
}