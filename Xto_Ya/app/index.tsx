import React from 'react';
import {StyleSheet, Button, Alert} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Тестування', 'Чи бажаєте ви пройти тест на темперамент?', [
      {
        text: 'Ні',
        onPress: () => console.log('Ні'),
        style: 'cancel',
      },
      {
        text: 'Так',
        onPress: () => console.log('Так')
        
      },
    ]);
    Alert.alert('Питання 1', 'Чи часто ви відчуваєте стрес?', [
      {
        text: 'Ні',
        onPress: () => console.log('Спокій та ромашки'),
        style: 'cancel',
      },
      {
        text: 'Так',
        onPress: () => console.log('Стресую')
        
      },
    ]);


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Button title={'Пройти тестування'} onPress={createTwoButtonAlert} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;