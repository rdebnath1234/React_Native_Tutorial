import { View, Text,Button,StyleSheet } from 'react-native'
import React,{useState,useContext,createContext} from 'react'
//step 1: Create a context
const MyContext = createContext();

const UseContext = () => {
    const[isDarkMode,setIsDarkMode] = useState(false);
  return (
    //step 2: Provide the Context value
    <MyContext.Provider 
    value={{isDarkMode,toggleTheme:() => setIsDarkMode(prev=>!prev)}}>
        <View style={[styles.container,{backgroundColor:isDarkMode?'black':'white'}]}>
            <Text style={[styles.title,{color:isDarkMode?'white':'black'}]}>Use Context</Text>
            <ThemeToggle/>
            <ThemeText/>
        </View>
    </MyContext.Provider>
  )
}
//step 3: Consume the context value
const ThemeToggle = () => {
    const {toggleTheme} = useContext(MyContext);
    return(
        <Button title="Toggle Theme" onPress={toggleTheme}/>
    )
}
const ThemeText = () => {
    const {isDarkMode} = useContext(MyContext);
    return(
        <Text style={{color:isDarkMode?'white':'black'}}>
            Theme Mode:{isDarkMode?'Dark':'Light'}
        </Text>
        
    )
}
export default UseContext
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:30,
    }

})
