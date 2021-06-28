import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import CurrentPrice from "./src/components/CurrentPrice/Index";
import HistoryGraph from "./src/components/HistoryGraph/Index";
import QuotationsList from './src/components/QuotationsList/Index';


function addZero(number){
  if (number <= 9 ){
    return "0"+number
  }
  return number
}

function url(qtdDays){
  const date = new Date()
  const listLastday = qtdDays
  const endDate =  `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
  date.setDate(date.getDate() - listLastday)
  const start_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${endDate}`
}

async function getListCoins(url){
  let response = await fetch(url)
  let returnApi = await response.json()
  let selectListQuotations = returnApi.bpi
  const queryCoinsList = Object.keys(selectListQuotations).map((key)=>{
    return{
      data:key.split("-").reverse().join("/"),
      valor:selectListQuotations[key]
    };
  });
  let data = queryCoinsList.reverse()
  return data
}

async function getPriceGraph(url){
  let responseg = await fetch(url)
  let returnApig = await responseg.json()
  let selectListQuotationsg = returnApig.bpi
  const queryCoinsListg = Object.keys(selectListQuotationsg).map((key)=>{
    return selectListQuotationsg[key]
  });
  let dataG = queryCoinsListg
  return dataG
}


export default function App() {
  const [coinlist,setCoinlist]=useState([])
  const [coinsGraph,setGraph]=useState([0])
  const [days, setDays]= useState(30)
  const [updateData,setUpdatedata]=useState(true)
  const [price,setPrice]=useState([0])

function updateDay(number){
  setDays(number)
  setUpdatedata(true)
}

function priceCotation(){
  setPrice(coinsGraph.pop())
}

useEffect(() =>{
  getListCoins(url(days)).then((data)=>{
    setCoinlist(data)
  });
  getPriceGraph(url(days)).then((dataG)=>{
    setGraph(dataG)
  });
  if(updateData){
    setUpdatedata(false)
    priceCotation()
  }
}, [updateData])


  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar backgroundColor="#0220a6" 
      barStyle="dark.content"
      />
      
      <CurrentPrice lastCotation={price}/>
      <HistoryGraph infoDataGraph={coinsGraph}/>  
      <QuotationsList filterDay={updateDay} listTransactions={coinlist}/>
      
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40:0
  },
});
