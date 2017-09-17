//src/Component/header.js
//import libraries for the encodeURIComponent
import React from 'react';
import  { View, Text} from 'react-native';

//make Component
const Header =(props) =>{ //props is for parent(component) to child communication
    const {textStyle, viewStyle} = styles;
        return (
            <View style ={viewStyle}>
                <Text style={textStyle}> {props.headerText} </Text>
            </View>
        );
};

//flexbox is for positioning the elements. 
//justifyContent:(flex-end,center,flex-start for pushing down, to the center,at top beginign) for moving vertically or horizontally
//allignitems: puting it on the line
const styles = {
    
    viewStyle:{
        backgroundColor: '#3BB9FF',//gray
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: 15,
        height: 60,
        shadowColor: '#000', //black
        shadowOffset: {height: 2, weight: 0},
        shadowOpacity: 0.9,//opacity ranges{0,1}
        elevation: 2,
        position: 'relative'        
    },
    textStyle:{
        fontSize: 30
    }

};

//Use the component available to the other part of the app

export default Header ; //export(is for use this header component to the other of the application)
