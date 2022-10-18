import { useEffect, useState } from "react";
import { createTodo, getTodo, deleteTodo, updateTodo } from "../../api/request";
import Todo from "./Todo";
import styles from "./Todolist.module.css";
import useInput from "../../hooks/useInput";

function Todolist() {
  const [todos, setTodos] = useState();
  const [todo, inputHandler, setTodo] = useInput();

  const getTodos = async () => {
    const { data } = await getTodo();
    setTodos(data);
  };

  const addTodo = async () => {
    const { data: newTodo } = await createTodo(todo);
    setTodo("");
    setTodos([...todos, newTodo]);
  };

  const checkTodo = async (id, todo, isDone) => {
    await updateTodo(id, todo, isDone);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const editTodo = async (id, text, isDone) => {
    await updateTodo(id, text, isDone);
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: text } : todo)));
  };

  const eraseTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>SIMPLE TODOLIST</div>
      <div className={styles.inputbox}>
        <input value={todo} onChange={inputHandler}></input>
        <button onClick={addTodo}>추가하기</button>
      </div>
      <div>
        {todos?.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            eraseTodo={eraseTodo}
            editTodo={editTodo}
            checkTodo={checkTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Todolist;
