import React from 'react';
import { StyleSheet} from 'react-native';

const centeredStyleObj ={
    display: 'flex',
    alignItems : 'center',
    justifyContent : 'center'
};

const styles = StyleSheet.create({
    view:{
        flexDirection: 'column',
       
       ...centeredStyleObj
    },
    card:{
        flexDirection: 'column',
        width :'70%',
        height:200,
        padding:2,
        ...centeredStyleObj
    },
    title:{
        fontSize: 25,
    },
    titleView:{
        ...centeredStyleObj,
        flexDirection: 'row',
    },
    inputSearch:{
        width:'80%',
        ...centeredStyleObj
    },
    buttonsView:{
        flexDirection: 'row',
        
        paddingTop:20,
        justifyContent : 'space-around'
       
    },
    buttons:{
        width:'40%'
    }

  });

  export default styles;