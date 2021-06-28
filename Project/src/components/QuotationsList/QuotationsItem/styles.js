import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    mainContent:{
        width:"95%",
        height:"auto",
        backgroundColor:"#000",
        marginLeft:"3%",
        marginBottom:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        padding:10,
    },
    contentLeft:{
        width:"36%",
        alignItems:"flex-end"
    },
    boxLogo:{
        flexDirection:"row",
        alignItems:"center",
    },
    logoBit:{
        width:40,
        height:40,
        marginLeft:2,
    },
    Date:{
        fontSize:16,
        paddingLeft:2,
        color:"#fff",
        fontWeight:"bold"
    },
    contentRight:{
        width:"60%",
        alignItems:"flex-end"
    },
    Price:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold"
    }


})

export default styles