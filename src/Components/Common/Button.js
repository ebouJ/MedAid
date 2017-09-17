import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) =>{ //this will automatically run <Button onPress={() => console.log(title)}/>  in AlbumDetail.js

    const { buttonStyle, textStyle } = styles;
    
    return( //TouchableOpacity is for poping when you click it 
        <TouchableOpacity onPress={onPress} style={buttonStyle}> 
            <Text style={textStyle}> 
                {children} 
            </Text>
        </TouchableOpacity>
    );

};

//flex: 1 for the button to expand the whole screen 
//stretch the button to the limit of its boundaries.
//fontWeight is thinness

const styles ={
    
    textStyle:{
        alignSelf:'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10 
        
    },
    buttonStyle: {

        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

// it is no longa gonna be export default Button;

export  { Button }; //export key and value but condence it to export just the key export  { Button: Button};

