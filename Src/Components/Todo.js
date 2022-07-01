import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../Consts/Colors';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/Feather';
import MainStore from '../Stores/MainStore';


class Todo extends React.Component {
    onPressTodo() {
        MainStore.toggleTodo(this.props.index)
    }
    render() {
        return (
            <TouchableOpacity style={styles.todo} onPress={() => this.onPressTodo()} activeOpacity={1}>
                {
                    this.props.finished ? (
                        <Icon name={"check-circle"} size={24} color={Colors.todoCircleFinished} />

                    ) : (
                        <Icon name={"circle"} size={24} color={Colors.todoCircle} />

                    )
                }
                <Text style={this.props.finished ? styles.todoTextFinished : styles.todoText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    todo: {
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    todoText: {
        marginLeft: 10,
        fontSize: 18,
    },
    todoTextFinished: {
        marginLeft: 10,
        fontSize: 18,
        fontStyle: "italic",
        textDecorationLine: "line-through"
    }
});
export default Todo;