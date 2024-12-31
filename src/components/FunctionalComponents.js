import { StyleSheet, Text, View,Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function FunctionalComponents() {
    const [count, setCount] = useState(0);
    useEffect(() => {
    console.log("useEffect Called", count);
    return () => {
        console.log("Component Will Unmount");
    };
    }, [count]);

    useEffect(() => {
        if (count == 5) {
            Alert.alert("Count is 5");
        }
    });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FunctionalComponents</Text>
      <Text style={styles.text}>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign:'center',
    },
})