import { View, Text,StyleSheet } from 'react-native'
import React,{useState,useRef,useLayoutEffect} from 'react'

const UseLayoutEffect = () => {
    const[dimensions, setDimensions] = useState({});
    const viewRef = useRef(null);
    useLayoutEffect(() => {
        if(viewRef.current){
            viewRef.current.measure((x,y,width,height,pageX,pageY) => {
                setDimensions({x,y,width,height,pageX,pageY})
            })
        }
    },[])
  return (
    <View style={styles.container}>
      <View style={styles.box} ref={viewRef}/>
      <Text>Box Dimensions:</Text>
      <Text>{JSON.stringify(dimensions,null,2)}</Text>
    </View>
  )
}

export default UseLayoutEffect;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    }
});