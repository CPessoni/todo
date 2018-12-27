import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Input from './Input'

import { connect } from 'react-redux';
import { addTodo, setTodoText, updateTodo } from '../actions';

class TodoForm extends React.Component {

    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }

    onPress() {
        const { todo } = this.props;
        if(todo.id)
            return this.props.dispatchUpdateTodo(todo);

        this.props.dispatchAddTodo(this.props.todo.text);
        
    }

    render() {
        const {text, id} = this.props.todo;

        return (
            <View style={ styles.formContainer }>
                <View style={ styles.inputContainer }>
                    <Input
                        onChangeText={ text => this.onChangeText(text) }
                        value={ text }
                    />
                </View>
                <View style={ styles.buttonContainer }>
                    <Button
                        onPress={ () => this.onPress() }
                        title={ id ? "save" : "add"}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }
});

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddTodo: text => {
            dispatch(addTodo(text))
        },
        dispatchSetTodoText: text => {
            dispatch(setTodoText(text))
        },
        dispatchUpdateTodo: todo => {
            dispatch(updateTodo(todo))
        }
    }
}

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}
/*const mapDispatchToProps = {
    dispatchAddTodo: addTodo
}*/

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);