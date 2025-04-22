import { FlatList, StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from '../models/todo';
import TodoCard from './TodoCard';

const api = "https://fakestoreapi.com/products";

const Lists = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const response = await axios.get<Todo[]>(api);
    setTodos  };
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Todo</Text>

        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoCard item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Lists;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 16,
  },
});