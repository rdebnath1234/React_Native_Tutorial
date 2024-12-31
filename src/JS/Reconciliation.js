import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Reconciliation = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleChangeName = () => {
    setName(name === 'John' ? 'Jane' : 'John');
  };
  return (
    <View style={{padding: 10}}>
      <Text style={{textAlign:'center',fontSize:25}}>Reconciliation Example</Text>
      <Text style={{textAlign:'center',fontSize:25}}>Count: {count}</Text>
      <Button title="Increase Count" onPress={handleIncrease} />
      <Text style={{textAlign:'center',fontSize:25}}>Name: {name}</Text>
      <Button title="Change Name" onPress={handleChangeName} />
    </View>
  )
}

export default Reconciliation