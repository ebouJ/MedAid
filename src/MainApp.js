import React, { Component } from 'react';
import  Header from './Components/Common/Header';
import YouTube from 'react-native-youtube'
//import  Button from './Components/Common/Button';

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
        ///////
        const opts = {
            height: '200',
            width: '600',
            playerVars: { 
                //'https://developers.google.com/youtube/player_parameters'
                autoplay: 1
            }
          };
          ////////
        return(
            <View style={styles.container}>
                <Header headerText= "MedAID"/>
                <Image source={{uri: this.state.image}} style={styles.image}/>
                <TouchableOpacity onPress={this.selectImage.bind(this)} style={{ marginTop: 15,
                justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.TextContainer}>Snap or Choose a pic from your device</Text>
                </TouchableOpacity>
                <Text style={styles.TextContainer2}>Sample Video</Text>
                <YouTube
                    videoId="xAgEJwiToHM" 
                    opts={opts}
                    onReady={this._onReady}
                />
           </View>
        );
        
    }
    _onReady(event) {
        // access to player in all event handlers via event.target 
        event.target.pauseVideo();
      }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ADD8E6',
        flex: 1,
    },
    image: {
        height: 200,
        width: 200,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    TextContainer:{
        fontSize: 20,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#3BB9FF',//gray
        paddingTop: 15,
        height: 60,
        shadowColor: '#000', //black
        shadowOffset: {height: 2, weight: 0},
        shadowOpacity: 0.9,//opacity ranges{0,1}
        elevation: 2,
        position: 'relative' 
        
    },TextContainer2:{
        fontSize: 20,
        justifyContent: 'center', 
        alignItems: 'center',
    } 
    
})




AppRegistry.registerComponent('myDoc', () => MainApp);


/*class Example extends React.Component {
    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters 
          autoplay: 1
        }
      };
   
      return (
        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
   
    _onReady(event) {
      // access to player in all event handlers via event.target 
      event.target.pauseVideo();
    }
  }*/