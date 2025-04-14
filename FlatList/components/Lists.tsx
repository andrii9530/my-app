import { FlatList, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from '../models/todo';
import { AntDesign } from '@expo/vector-icons';
import TodoCard from './TodoCard';

const api = "https://dummyjson.com/todos";

const Lists = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const response = await axios.get(api);
      setTodos(response.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>ODOT List</Text>
      <Text style={styles.date}>4th March 2018</Text>

      <FlatList
        data={todos.slice(0, 5)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoCard item={item} />}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity style={styles.fab}>
        <AntDesign name="plus" size={28} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Lists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FC',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  date: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 100,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#377DFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
});