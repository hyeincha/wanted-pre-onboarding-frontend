import { useState } from "react";
import styles from "./Todolist.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CloseIcon from "@mui/icons-material/Close";
import useInput from "../../hooks/useInput";

function Todo({ todo, eraseTodo, editTodo, checkTodo }) {
  const [editMode, setEditMode] = useState();
  const [isDone, setIsDone] = useState(todo.isCompleted);
  const [text, textHandler] = useInput();

  const isDoneHandler = (id) => {
    checkTodo(id, todo.todo, !todo.isCompleted);
  };

  const editHandler = (id) => {
    setEditMode(false);
    editTodo(id, text, isDone);
  };

  return (
    <div className={styles.todos}>
      <div className={todo.isCompleted ? styles.done : styles.todo}>
        <input
          value={todo.isCompleted}
          onChange={(e) => setIsDone(e.target.checked)}
          onClick={() => isDoneHandler(todo.id)}
          type="checkbox"
          checked={todo.isCompleted}
        ></input>
        {editMode && <input onChange={textHandler} defaultValue={todo.todo}></input>}
        {!editMode && <p>{todo.todo}</p>}
      </div>
      <div className={styles.icon}>
        {editMode && <DoneAllIcon onClick={() => editHandler(todo.id)} />}
        {editMode && <CloseIcon onClick={() => setEditMode(false)} />}
        {!editMode && <EditIcon onClick={() => setEditMode(true)} />}
        {!editMode && <DeleteIcon onClick={() => eraseTodo(todo.id)} />}
      </div>
    </div>
  );
}

export default Todo;
