import { StyleSheet, View } from 'react-native'
import React from 'react'
import LifecycleComponent from './src/components/ClassComponents'
import FunctionalComponents from './src/components/FunctionalComponents'
import BasicComponents from './src/components/BasicComponents'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Hooks from './src/Hooks/Hooks'
import JavaScript from './src/JS/JavaScript'
import FinalHomeWork from './src/components/FinalHomeWork'

const App = () => {
  return (
    <SafeAreaProvider>
       <View style={styles.container}>
            {/* <LifecycleComponent/> */}
            {/* <FunctionalComponents/> */}
            {/* <BasicComponents/> */}
            {/* <Hooks/> */}
            {/* <JavaScript/> */}
            <FinalHomeWork/>
        </View>
    </SafeAreaProvider>
  )
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})