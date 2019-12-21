import React from 'react';
import { StyleSheet} from 'react-native';

const centeredStyleObj ={
    display: 'flex',
    alignItems : 'center',
    justifyContent : 'center'
};

export const styles = StyleSheet.create({
    view:{
        flexDirection: 'column',
       
       ...centeredStyleObj
    }, 
    titleView:{
        ...centeredStyleObj,
        flexDirection: 'row',
    },    
    title:{
        fontSize: 25,
    },      
    buttonsView:{
        flexDirection: 'row',
        paddingTop:20,
        justifyContent : 'space-around'
       
    },

  });

 export const containerStyles= {
    card:{
        flexDirection: 'column',
        width :'70%',
        height:200,
        padding:2,
        ...centeredStyleObj
    },
    inputSearch:{
        width:'80%',
        ...centeredStyleObj
    },    
    buttons:{
        width:'40%'
    }

  }