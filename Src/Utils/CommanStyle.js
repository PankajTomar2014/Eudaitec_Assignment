import {StyleSheet} from 'react-native';
import  Colors  from '../Utils/Colors';


export default styles = StyleSheet.create({
// ==========List Item Style=================
    cardContainer:{
        padding:20,
        marginHorizontal:15,
        marginTop:5,
        backgroundColor:Colors.mediumGreen
    },
    titleStyle:{
        fontWeight:"600",
        color:Colors.red,
        backgroundColor:Colors.lightGray, 
        padding:5,
    },
    decriptStyle:{ 
        marginVertical:2,
        height:60,
        padding:5, 
        backgroundColor:Colors.lightGray,
    },
    bottomTextStyle:{
        padding:5, 
        marginVertical:2,
        paddingVertical:5,
        backgroundColor:Colors.lightGray,
        flexDirection:"row",
        justifyContent:"space-between"
    },


// =========List Header Style================

headerContainer:{
    paddingLeft:15,
    justifyContent:"center",
    height:50,
    width:"100%",
    backgroundColor:Colors.mediumGreen
},
imageStyle:{ 
    borderRadius:20,
    height:30,
    width:30
},
// =================================

errorText:{ 
    color: Colors.red,
    textAlign:'center',
    fontWeight:"bold",
    fontSize:20,marginTop:300 
}


})