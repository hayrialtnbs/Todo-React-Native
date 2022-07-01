import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../Consts/Colors';
import Icon from 'react-native-vector-icons/Feather';
import { inject, observer } from 'mobx-react';
import MainStore from '../Stores/MainStore';


@inject("store")
@observer
class AddTodo extends React.Component {
    onPressButton() {
        this.props.store.addTodo({
            finished: false,
            text: this.props.store.addTodoInputText
        });
    }

    render() {
        return (
            <View style={styles.addTodo}>

                <TextInput
                    value={MainStore.addTodoInputText}
                    onChangeText={text => this.props.store.addTodoInputText_change(text)}
                    placeholder={"Görev Giriniz..."}
                    placeholderTextColor="gray"
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onPressButton()}>

                    <Icon name={"plus-circle"} color={Colors.buttonText} size={25} />
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    addTodo: {
        paddingVertical: 25,
        paddingHorizontal: '5%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        flex: 1,
        height: 60,
        backgroundColor: Colors.inputBackground,
        paddingHorizontal: 20,
        fontSize: 16,
        borderRadius: 4,
        elevation: 2,
        color: Colors.inputText

    },
    button: {
        backgroundColor: Colors.buttonBackground,
        width: 50,
        height: 60,
        marginLeft: 25,
        borderRadius: 2,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default AddTodo;