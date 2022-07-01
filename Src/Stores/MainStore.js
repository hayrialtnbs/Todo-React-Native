import { observable, action, makeObservable } from "mobx";
class MainStore {
    todos = [];

    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodoInputText: observable,
            addTodo: action,
            addTodoInputText_change: action,
            getTodoList: action,
            toggleTodo: action,
        })
    }

    addTodo(todo) {
        console.log('add todo store data : ', todo)
        this.todos = [...this.todos, ...[todo]];
        this.addTodoInputText = "";
    }
    addTodoInputText = "";
    addTodoInputText_change(text) {
        this.addTodoInputText = text;
    }
    getTodoList() {
        return this.todos
    }

    toggleTodo(index) {
        this.todos[index].finished = !this.todos[index].finished
    }
}
export default new MainStore();
