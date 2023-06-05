import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux"; // useDispatch hook to call reducers
import { addTodo, deleteTodo, todoDoneToggle } from "./reducers/todos-reducer";

const Todos = () => {
  // APPLICATION LEVEL STATE: REDUX
  // retrieve todos from reducer state and assign to local todos constant
  const todos = useSelector((state) => state.todos);

  // COMPONENT LOCAL STATE: USESTATE
  // create todo local state variable
  const [todo, setTodo] = useState({ do: "" });

  // handle keystroke changes in input field and set value to todo variable
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue,
    };
    setTodo(newTodo);
  };

  // USING DISPATCH: handling application level events
  const dispatch = useDispatch();

  const createTodoClickHandler = () => {
    // use dispatcher to invoke reducer functions (passing in new todo as the payload in action object)
    dispatch(addTodo(todo));
    setTodo({ do: "" }); // clear local todo state variable
  };

  const deleteTodoClickHandler = (index) => {
    // dispatch sends index of deleted object as payload of action object
    dispatch(deleteTodo(index));
  };

  const toggleTodoDone = (todo) => {
    // send todo index to reducer function that toggles done field
    dispatch(todoDoneToggle(todo))
  }

  return (
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={todo._id} className="list-group-item">
            {/* if users changes checkbox, we will pass todo to reducer function to update the todo's state */}
            <input
              type="checkbox"
              className="me-2"
              checked={todo.done}
              onChange={() => toggleTodoDone(todo)}
            />
            {todo.do}
            {/* delete button sends index of todo to delete to handler */}
            {/* We use ()=>{} for onClick because we are passing a paremeter to the function - or else it will get into infinite loop */}
            <button
              onClick={() => deleteTodoClickHandler(index)}
              className="btn btn-danger float-end ms-2"
            >
              Delete
            </button>
          </li>
        ))}
        <li className="list-group-item">
          <button
            onClick={createTodoClickHandler}
            className="btn btn-primary w-25 float-end"
          >
            Create
          </button>
          <input
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control w-75"
          />
        </li>
      </ul>
    </>
  );
};
export default Todos;