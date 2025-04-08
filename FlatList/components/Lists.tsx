import { FlatList,StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api = "https://fakestoreapi.com/products";

const Lists = () => {

const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])
    
    const getProducts = async () => {
        const response = await axios.get(api);
        setProducts(response.data);
    }

  return (
    <View>
        <Text>Продукти</Text>
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <Text>{item.title}</Text>
            )}
        />
    </View>
  )
}

export default Lists

const styles = StyleSheet.create({})