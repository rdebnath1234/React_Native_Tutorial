import { View, Text,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'

export const UseApi = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                const modifiedData =
                data?.products?.filter(product =>
                product.tags.some(tag => tag.toLowerCase() === 'beauty'),
                ) || [];
            setData(modifiedData); 
            }
            catch(error){
                Alert.alert('Error',error.message);
            }
            finally{
                setLoading(false);
            }
        };
        useEffect(() => {
            fetchData();
        },[]);

    return {data, isLoading};
}