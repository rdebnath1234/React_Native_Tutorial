import { StyleSheet, Text, View,Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { imgUri } from '../dummyData/image';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = Dimensions.get('window').fontScale;
const scale = Dimensions.get('window').scale;

console.log('Dimensions',screenHeight,screenWidth,fontScale,scale);

const BasicComponents = () => {
    const insets=useSafeAreaInsets();
    console.log(insets.top);
    console.log(insets.bottom);
    console.log(insets.left);
    console.log(insets.right);
    const onLayout = (event) => {
        console.log(event.nativeEvent);
    }
  return (
    
        <View onLayout={onLayout} style={[styles.container,{paddingTop:insets.top}]}>
        <TouchableOpacity style={styles.button} onPress={()=>{console.log("Basic Components Clicked")}}>
        <Text numberOfLines={2}>Basic Components</Text>
        </TouchableOpacity>
        <Image style={styles.img} source={{uri:imgUri}}/>
        </View>  
  )
}

export default BasicComponents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'yellow',
    },
    button: {
        padding: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});