import { useEffect, useState } from "react";
import { createTodo, getTodo } from "../../api/request";
import useInput from "../../hooks/useInput";
import Todo from "./Todo";
import styles from "./Todolist.module.css";

function Todolist() {
  const [todos, setTodos] = useState();
  const [todo, inputHandler, setTodo] = useInput();
  console.log(todo);

  const addTodo = async () => {
    return await createTodo(todo);
  };

  const getTodos = async () => {
    return await getTodo();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inputbox}>
        <input onChange={inputHandler}></input>
        <button onClick={addTodo}>추가하기</button>
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default Todolist;
