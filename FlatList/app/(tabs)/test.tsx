import { Button, Modal,SafeAreaView, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';
import TestModal from '../../components/TestModal';

export default function NotFoundScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const showAlert = () => {
    Alert.alert('Hello World!', 'Do you want to change color?', [
        {
            text: 'No',
            style: 'destructive',
        },
        { text: 'OK', onPress: () => setIsDarkMode(!isDarkMode) },
    ]);
}

  return (
    <View>
      <TestModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
