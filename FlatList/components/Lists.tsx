import { FlatList,StyleSheet, ScrollView, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api = "https://fakestoreapi.com/products";

type Products = {
        id: number
        title: string;
        price: number;
        description: string;
        category: string;
        inage: string;
}

const Lists = () => {

const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        getProducts();
    }, [])
    
    const getProducts = async () => {
        const response = await axios.get<Products[]>(api);
        setProducts(response.data);
    }

  return (
    <View>
        <SafeAreaView>
        <Text>Продукти</Text>
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <Text style={styles.text}>{item.title}</Text>
            )}
        />
        </SafeAreaView>
    </View>
  )
}

export default Lists

const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    text:{
        fontSize: 28,
        textAlign: 'center'
    }
})