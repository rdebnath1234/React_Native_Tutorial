import { StyleSheet, Text, View, Button,TextInput } from 'react-native'
import React ,{useRef,forwardRef,useImperativeHandle}from 'react'

//Child Component
const CustomInput = forwardRef((props,ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref,() => ({
        focus:() => {
            inputRef.current.focus();
        },
        clear:() => {
            inputRef.current.clear();
        },
    }));
    return <TextInput ref={inputRef} style={styles.input}
    placeholder='Type here....'/>
});
//Parent Component
const ForwardRef = () => {
    const inputRef = useRef();
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:20}}>
            <CustomInput ref={inputRef}/>
            <Button title='Focus' onPress={() => inputRef.current.focus()}/>
            <Button title='Clear' onPress={() => inputRef.current.clear()}/>
        </View>
    )
}

export default ForwardRef

const styles = StyleSheet.create({
    input:{
        height:50,
        width:300,
        margin:12,
        borderWidth:1,
    },
})