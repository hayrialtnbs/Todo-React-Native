import React, { Component } from 'react';
import { ScrollView, StyleSheet, FlatList, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import Todo from './Todo';
import MainStore from '../Stores/MainStore';


class TodoList extends React.Component {
    render() {

        return (

            <ScrollView style={styles.todoList}>
                {
                    MainStore.todos.map((item, index) => (
                        <Todo finished={item.finished} text={item.text} index={index} />
                    ))
                }
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
    todoList: {
        paddingHorizontal: "8%",
        
    }
});
export default observer(TodoList);