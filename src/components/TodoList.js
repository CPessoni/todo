import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { toggleTodo, setEditingTodo } from '../actions';

const TodoList = ({ todos, dispatchToggleTodo, dispatchSetEditingTodo }) => {
    /*<Text key={ todo.id }>{ todo.text }</Text>)*/
    return (
        <View>
            { todos.map(todo => (
                <TodoListItem
                    key={ todo.id }
                    todo={ todo }
                    onPressTodo={ () => {
                        dispatchToggleTodo(todo.id)
                    } }
                    onLongPressTodo={()=> {
                        dispatchSetEditingTodo(todo)
                    }}
                />
                
            )) }
                
        </View>
    )
}


const mapStateToProps = state => {
    const { todos } = state;
    return { todos: todos };
}

export default connect(mapStateToProps,
    {
        dispatchToggleTodo: toggleTodo,
        dispatchSetEditingTodo: setEditingTodo
    })(TodoList);