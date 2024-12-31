import { View, Text,Button,StyleSheet } from 'react-native'
import React,{useCallback,useState} from 'react'
const Child= React.memo(({onBtnClick}) => {
    console.log('Child Rendered');
    return (
        <Button title="Click Me" onPress={onBtnClick}/>
    )
})
const UseCallBack = () => {
    const [count,setCount] = useState(0);
    const[step,setStep] = useState(1);
    const incrementCount=useCallback(() => {
        console.log('Increment Count');
        setCount(prev => prev+step);
    },[step]);
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Count:{count} Step:{step} </Text>
        <Child onBtnClick={incrementCount}/>
        <Button title="Increment Step" onPress={() => setStep(prev => prev+1)}/>
    </View>
  )
}

export default UseCallBack
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        marginBottom: 20,
    }
})
