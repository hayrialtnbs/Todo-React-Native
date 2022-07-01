import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'mobx-react';
import Header from './Src/Components/Header';
import AddTodo from './Src/Components/AddTodo';
import TodoList from './Src/Components/TodoList';
import store from './Src/Stores/MainStore';


const App = () => {
  return (
    <Provider store={store} >
      <View style={styles.container}>
        <StatusBar />
        <Header />
        <AddTodo />
        <TodoList store={store}  />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;