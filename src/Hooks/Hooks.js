import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UseLayoutEffect from './UseLayoutEffect'
import UseCallBack from './UseCallBack'
import ForwardRef from './ForwardRef'
import UseContext from './UseContext'
const Hooks = () => {
    // const[count,setCount] = React.useState(0);
    // const[input,setInput] = React.useState('');
    // const expensionValue = React.useMemo(() =>{
    //     console.log('Expensive Calculation');
    //     let total=0;
    //     for(let i=0;i<1e7;i++){
    //         total+=i;
    //     }
    //     return total;
    // },[count]);
  return (
    <SafeAreaView style={styles.container}>
        {/* <UseLayoutEffect/> */}
        {/* <Text>Expensive Calculation:{expensionValue}</Text>
        <Button title="Increment" onPress={() => setCount(count+1)}/>
        <Button title="Update Input" onPress={() => setInput(input+'!')}/>
            <Text>Input:{input}</Text> */}
        {/* <UseCallBack/> */}
        {/* <ForwardRef/> */}
        {/* <UseContext/> */}
    </SafeAreaView>
  )
}

export default Hooks

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})