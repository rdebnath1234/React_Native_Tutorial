// displays the list of products using this API and filter
// the products which has one of the tags as “beauty”
// https://dummyjson.com/products

// Create a custom hook
// Create a HOC(High Order Component)
import { StyleSheet, Text, View,FlatList,ActivityIndicator,Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React,{useEffect,useState} from 'react'
import { UseApi } from '../Hooks/UseApi'
const FinalHomeWork = () => {
    const {data, isLoading}= UseApi();
    // const [data, setData] = useState([]);
    // const [isLoading, setLoading] = useState(true);

    // const fetchData = async () => {
    //     setLoading(true);
    //     try{
    //         const response = await fetch('https://dummyjson.com/products');
    //         const data = await response.json();
    //         const modifiedData =
    //         data?.products?.filter(product =>
    //         product.tags.some(tag => tag.toLowerCase() === 'beauty'),
    //         ) || [];
    //     setData(modifiedData); 
    //     }
    //     catch(error){
    //         Alert.alert('Error',error.message);
    //     }
    //     finally{
    //         setLoading(false);
    //     }
    // };
    // useEffect(() => {
    //     fetchData();
    // },[]);
    const renderItemComponent = ({item}) => {
        return (
          <>
            <Text>{item?.title}</Text>
            <Text>{item?.price}</Text>
            <Text>{item?.tags?.join(',')}</Text>
          </>
        );
      };
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="small" color="black" />
      ) : (
        <FlatList
          data={data}
          ListEmptyComponent={
            <View>
              <Text>No Data Found!</Text>
            </View>
          }
          renderItem={renderItemComponent}
          key={item => item?.id}
          keyExtractor={item => item?.id}
          contentContainerStyle={styles.flatlistContainer}
          ItemSeparatorComponent={<View style={styles.divider} />}
        />
      )}
    </SafeAreaView>
  )
}

export default FinalHomeWork

const styles = StyleSheet.create({
    divider: {
      width: '100%',
      height: 1,
      backgroundColor: '#ccc',
      marginVertical: 3,
    },
    container: {
      paddingTop: 30,
      backgroundColor: '#fff',
    },
    flatlistContainer: {
      padding: 15,
    },
  });