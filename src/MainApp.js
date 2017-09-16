import React, { Component } from 'react';
import { 
    AppRegistry,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native';
 import Camera from 'react-native-camera';
 import ImagePicker from 'react-native-image-picker';

 var options = {
    title: 'Select an Image',
    storageOptions: {
      skipBackup: true,
    },
    maxWidth: 480
  };
 class MainApp extends Component {
    constructor() {
        super();
        this.state = {
          image:'https://s3.ca-central-1.amazonaws.com/pocket-doc/Logomakr_1KXbWa.png',
          data: '1. Take picture of wound',
          cure: '2. Apply cure',
          accuracy: '0'
        }
      }
    
     componentWillMount() {
     }
    

     selectImage(){
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else {
    
            let source = 'data:image/jpeg;base64,' + response.data;
            this.setState({image: source});
       }
        }); 
    } 

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.selectImage.bind(this)} style={{ marginTop: 15,
                justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Take Pic</Text>
                </TouchableOpacity>
                  <Image source={{uri: this.state.image}} style={styles.image}/>
           </View>
        );
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 200,
        width: 200,
    }
    
})




AppRegistry.registerComponent('myDoc', () => MainApp);