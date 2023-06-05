import {createSlice} from "@reduxjs/toolkit";

// initial state
const initialTodos = [{_id: "123", do: "Accelerate the world's transition to sustainable energy", done: false},
{_id:"234", do: "Reduce space transportation costs to become a spacefaring civilization", done:false}];

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,
    reducers: {
        // reducer function receive current state
        // mutate current state into new state (pushing new object to array)
        addTodo(state, action) {
            state.push({
                _id: (new Date()).getTime(),
                do: action.payload.do, done: false // object sent through action obj ("payload")
            });
        },
        deleteTodo(state, action) {
            const index = action.payload
            state.splice(index, 1)
        },
        // updating state
        todoDoneToggle(state, action) {
            // find todo that needs to be updated
            const todo = state.find((todo) => todo._id === action.payload._id)
            // apply toggling
            todo.done = !todo.done
        }
    }
});

export default todosSlice.reducer;
export const {addTodo, deleteTodo, todoDoneToggle} = todosSlice.actions; //export actions so we can call them from UI